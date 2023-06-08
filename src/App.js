/* React */
import { useState, useEffect } from 'react';

/* Components */
import Card from './components/Card/Card';
import Dropdown from './components/Dropdown/Dropdown';
import EmptyState from './components/EmptyState/EmptyState';
import Loading from './components/Loading/Loading';
import Pagination from './components/Pagination/Pagination';

/* Store */
import { useGetCardsMutation } from './services/card'

/* Assets */
import { industryPayloadMapper, industryTitleMapper, regionPayloadMapper } from '../src/assets/mappers/dropdowns'

import './App.css';

function App() {
  /* Data */
  const [cards, setCards] = useState([]);
  const [emptyCards, setEmpty] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  /* Payload */
  const [industrySelected, setIndustrySelected] = useState('');
  const [regionSelected, setRegionSelected] = useState('');

  const [getCards, {
    data: posts,
    isLoading: isGetLoading,
    isSuccess: isGetSuccess,
    isError: isGetError,
    // error: getError,
  }] = useGetCardsMutation({ refetchOnMountOrArgChange: true });

  const getCardsRequest = async (page, industry, region) => {
    setIndustrySelected(industry)
    setRegionSelected(region)

    const payload = {
      category: [],
      industry: industryPayloadMapper(industry),
      // integration: integration,
      limit: 20,
      order: 'ASC',
      order_by: 'title',
      page: page,
      post_type: ['customers'],
      // region: regionPayloadMapper(region),
      search: '',
    };

    try {
      await getCards(payload)
    } catch(error) {
      setCards(
        <div>{error.message}</div>
      )
    }
  }

  useEffect(() => {
    setEmpty()

    if (isGetSuccess) {
      setCards(posts.data.list.map((item, index) => {
        return (
          <Card
            key={index}
            content={item.content}
            label={item.label.text}
            link={item.link}
            title={item.title}
            image={item.image.src}
            imageAlt={item.image.alt}
            imageError={item.image.broken_image.src}
          />
        )
      }))

      setTotalCount(posts.data.count_per.query)

      if (posts.data.empty) {
        setEmpty(
          <EmptyState title={posts.data.empty.title} content={posts.data.empty.content} image={posts.data.empty.image.src} imageAlt={posts.data.empty.image.alt}/>
        )
      }
    }

    if (isGetError) {
      setCards(
        <div>Error</div>
      )
    }
  }, [posts, isGetSuccess, isGetError]);

  useEffect(() => {
    getCardsRequest(1)
  }, [])

  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'center', flexGrow: '1', }}>
        <div className="result-customers">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Dropdown industry={industry => { getCardsRequest(1, industry, regionSelected); }} industryTitle={industryTitleMapper(industrySelected)}/>
            {/* <Dropdown2 industry1={industry => { getCardsRequest(1, industrySelected, industrySelected); }}/> */}
          </div>
          <div className="card-container">
            {isGetLoading && <Loading />}
            {cards}
          </div>
          {emptyCards}
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={totalCount}
            pageSize={20}
            onPageChange={page => { setCurrentPage(page); getCardsRequest(page); }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
