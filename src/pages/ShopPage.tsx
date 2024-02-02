import { useEffect, useState } from 'react'
import Select from 'react-select'
import shopPageClasses from './ShopPage.module.scss'
import helpers from '../styles/helpers.module.scss'
import BaseBanner from '../components/BaseBanner'
import FilterIcon from '../components/ShopIcons/FilterIcon'
import ViewLargeItemsList from '../components/ShopIcons/ViewLargeItemsList'
import ViewListIcon from '../components/ShopIcons/ViewListIcon'
import separatorLine from '../assets/shop-icons/line-separator.svg'
import ProductCard from '../components/ProductCard'
import { useProducts } from '../state/ProductsContext'
import { filterDetails } from '../state/filterDetails'
import { ProductType } from '../models/ProductType'

type OptionType = {
  label: string
  value: string
}

const ShopPage = () => {
  const { products } = useProducts()
  const [sortedItems, setSortedItems] = useState<ProductType[]>([])
  const [showFilter, setShowFilter] = useState(false)

  useEffect(() => {
    setSortedItems(products)
  }, [products])

  const toggleFilter = () => {
    setShowFilter((previousState) => !previousState)
  }

  const enum SortType {
    AllProducts = 'AllProducts',
    Popularity = 'Popularity',
    PriceHighToLow = 'PriceHighToLow',
    PriceLowToHigh = 'PriceLowToHigh'
  }

  const options: OptionType[] = [
    { value: SortType.AllProducts, label: 'All products' },
    { value: SortType.Popularity, label: 'Popularity' },
    { value: SortType.PriceHighToLow, label: 'Price High to Low' },
    { value: SortType.PriceLowToHigh, label: 'Price Low to High' }
  ]
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(options[0])

  const handleChange = (option: OptionType | null) => {
    setSelectedOption(option)
    switch (option?.value) {
      case SortType.AllProducts:
        setSortedItems(products)
        break
      case SortType.Popularity: {
        const sortedProducts = [...products].sort((a, b) => {
          return b.quantitySold - a.quantitySold
        })
        setSortedItems(sortedProducts)
        break
      }
      case SortType.PriceHighToLow: {
        const sortedProducts2 = [...products].sort((a, b) => {
          return b.price - a.price
        })
        setSortedItems(sortedProducts2)
        break
      }
      case SortType.PriceLowToHigh: {
        const sortedProducts3 = [...products].sort((a, b) => {
          return a.price - b.price
        })
        setSortedItems(sortedProducts3)
        break
      }
    }
    console.log(sortedItems)

    console.log(`Option selected:`, option)
  }

  return (
    <div className={shopPageClasses.shopPage}>
      <BaseBanner fromPage="Home" toPage="Shop" title="Shop" />

      <div className={shopPageClasses.controlPanel}>
        <div className={shopPageClasses.controlPanelFilter}>
          <div className={shopPageClasses.controlPanelFilterIcons}>
            <FilterIcon onClick={toggleFilter} />
            <span>Filter</span>
            <ViewLargeItemsList />
            <ViewListIcon />
          </div>
          <img src={separatorLine} alt="separator" />
          <span>Showing 1-16 of 32 results</span>
        </div>
        <div className={shopPageClasses.controlPanelSort}>
          <div className={shopPageClasses.showItems}>
            <span className={shopPageClasses.itemsOnPageTitle}>Show</span>
            <span className={shopPageClasses.itemsOnPage}>{sortedItems.length}</span>
          </div>

          <div className={helpers['flex-center']}>
            <span className={shopPageClasses.sortBy}>Sort by</span>
            <Select
              className={shopPageClasses.select}
              isMulti={false}
              options={options}
              onChange={handleChange}
              value={selectedOption}
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  textColor: '#9F9F9F',
                  width: '230px',
                  borderRadius: '0',
                  padding: '5px',
                  fontSize: '18px',
                  color: '#9F9F9F'
                })
              }}
            />
          </div>
        </div>
      </div>

      <div
        className={
          showFilter ? shopPageClasses.filterContainer : shopPageClasses.hideFilter
        }
      >
        <div className={shopPageClasses.filterCategory}>
          <span>Room Type</span>
          <ul>
            {filterDetails.type.map((item) => (
              <li key={item.name} className={shopPageClasses.filterOptions}>
                <input
                  type="checkbox"
                  value={item.value}
                  name={item.name}
                  id={item.value}
                />
                <label htmlFor={item.value}>{item.name}</label>
              </li>
            ))}
          </ul>
        </div>
        <div className={shopPageClasses.filterCategory}>
          <span>Special offers</span>
          <div className={shopPageClasses.filterOptions}>
            <input
              type="checkbox"
              value={filterDetails.specialOffers.value}
              name={filterDetails.specialOffers.name}
              id={filterDetails.specialOffers.value}
            />
            <label htmlFor={filterDetails.specialOffers.value}>
              {filterDetails.specialOffers.name}
            </label>
          </div>
        </div>
        <div className={shopPageClasses.filterCategory}>
          <span>Color</span>
          <ul>
            {filterDetails.color.map((item) => (
              <li key={item.name} className={shopPageClasses.filterOptions}>
                <input
                  type="checkbox"
                  value={item.value}
                  name={item.name}
                  id={item.value}
                />
                <label htmlFor={item.value}>{item.name}</label>
              </li>
            ))}
          </ul>
        </div>
        <div className={shopPageClasses.filterCategory}>
          <span>Price</span>
          {filterDetails.price.map((item) => (
            <li key={item.name} className={shopPageClasses.filterOptions}>
              <input
                type="checkbox"
                value={item.value}
                name={item.name}
                id={`${item.value}`}
              />
              <label htmlFor={`${item.value}`}>{item.name}</label>
            </li>
          ))}
        </div>
      </div>

      <div className={shopPageClasses.shopProducts}>
        <ul>
          {sortedItems.map((product) => (
            <ProductCard
              id={product.id}
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              shortDescription={product.shortDescription}
              discount={product.discount}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ShopPage
