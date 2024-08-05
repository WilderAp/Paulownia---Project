import { Layout } from '@/components/common'
import Banner from '@/components/common/Banner'
import CardItem from '@/components/common/CardItems'
import { itemsData } from '@/data/itemsData'
import { Link } from 'react-router-dom'

function Items() {
  return (
    <div>
      <Banner title="Código de la conducta de la Unión Europea" />
      <Layout>
        <div className="grid py-10 px-7 md:px-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:py-24 gap-5">
          {itemsData.map((item) => (
            <Link to={`/items/${item._id}`} key={item._id}>
              <CardItem
                title={item.info}
                _id={item._id}
                picture={item.picture}
              />
            </Link>
          ))}
        </div>
      </Layout>
    </div>
  )
}
export default Items
