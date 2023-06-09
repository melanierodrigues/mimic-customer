/* React */
import { useState, useEffect } from 'react';

/* Components */
import Card from '../components/Card/Card';
import Dropdown from '../components/Dropdown/Dropdown';
import EmptyState from '../components/EmptyState/EmptyState';
import Loading from '../components/Loading/Loading';
import Pagination from '../components/Pagination/Pagination';

/* Store */
import { useGetCardsMutation } from '../services/card'

/* Mappers */
import {
  industryPayloadMapper,
  industryTitleMapper,
  integrationPayloadMapper,
  integrationTitleMapper,
  regionPayloadMapper,
  regionTitleMapper
} from '../assets/mappers/dropdowns'

/* Data for dropdowns */
import industriesData from '../components/Dropdown/industries-dropdown.data.json';
import integrationData from '../components/Dropdown/integration-dropdown.data.json';
import regionsData from '../components/Dropdown/regions-dropdown.data.json';

/* Style */
import './Customer.scss';

function Customer() {
  /* Data */
  const [cards, setCards] = useState([]);
  const [emptyCards, setEmpty] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [clickOutside, setClickOutside] = useState(true);

  /* GetCards State */
  const [getCards, {
    data: posts,
    isLoading: isGetLoading,
    isSuccess: isGetSuccess,
    isError: isGetError,
  }] = useGetCardsMutation({ refetchOnMountOrArgChange: true });

  /* Payload */
  const [industrySelected, setIndustrySelected] = useState('');
  const [integrationSelected, setIntegrationSelected] = useState(''); 
  const [regionSelected, setRegionSelected] = useState('');

  /* GetCards Request */
  const getCardsRequest = async (page, industry, region, integration) => {
    setIndustrySelected(industry)
    setRegionSelected(region)
    setIntegrationSelected(integration)

    const payload = {
      category: [],
      industry: industryPayloadMapper(industry),
      integration: integrationPayloadMapper(integration),
      limit: 20,
      order: 'ASC',
      order_by: 'title',
      page: page,
      post_type: ['customers'],
      region: regionPayloadMapper(region),
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

  /* useEffect to load and render card data */
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

      if (posts.data.empty) {
        setEmpty(
          <EmptyState
            title={posts.data.empty.title}
            content={posts.data.empty.content}
            image={posts.data.empty.image.src}
            imageAlt={posts.data.empty.image.alt}/>
        )
      }

      setTotalCount(posts.data.count_per.query)
      window.scrollTo(0, 0)
    }

    if (isGetError) {
      setCards(
        <h5 style={{ whiteSpace: 'nowrap', paddingLeft: '8.33333%', fontWeight: '700', margin: '0' }}>Please try again</h5>
      )
      window.scrollTo(0, 0)
    }
  }, [posts, isGetSuccess, isGetError]);

  /* Get data for cards when mounting the application */
  const OnMountedCards = () => {
    useEffect(() => {
      getCardsRequest(1)
    }, [])
  }

  OnMountedCards()

  return (
    <div className="App" onClick={() => { setClickOutside(!clickOutside); }}>
      <div style={{ paddingBlock: '14px' }}/>
        <div className="result-customers">
          <div style={{ width: '100%' }}>
            {/* <!-- *********************************************
            *                     Dropdowns                      *
            ********************************************** --> */}
            <div className="dropdown-container">
              <Dropdown
                data={industriesData}
                clickOutside={clickOutside}
                fristTitle={industryTitleMapper(0)}
                selected={industry => { getCardsRequest(1, industry, regionSelected, integrationSelected); }}
                selectedTitle={industryTitleMapper(industrySelected)}
              />
              <Dropdown
                data={regionsData}
                clickOutside={clickOutside}
                fristTitle={regionTitleMapper(0)}
                selected={region => { getCardsRequest(1, industrySelected, region, integrationSelected); }}
                selectedTitle={regionTitleMapper(regionSelected)}
              />
              <Dropdown
                data={integrationData}
                clickOutside={clickOutside}
                fristTitle={integrationTitleMapper(0)}
                selected={integration => { getCardsRequest(1, industrySelected, regionSelected, integration); }}
                selectedTitle={integrationTitleMapper(integrationSelected)}
              />
            </div>
          </div>
        </div>

      {/* <!-- *********************************************
      *                       Cards                        *
      ********************************************** --> */}
      <div style={{ display: 'flex', flexGrow: '1', zIndex: '1' }}>
        <div className="result-customers">
          <div className="card-container">
            {isGetLoading && <Loading />}
            {cards}
          </div>
          <div style={{ paddingLeft: '1%', paddingRight: '1%' }}>{emptyCards}</div>
          {isGetError && emptyCards}
          {/* <!-- *********************************************
          *                     Pagination                     *
          ********************************************** --> */}
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={totalCount}
            pageSize={20}
            onPageChange={page => { setCurrentPage(page); getCardsRequest(page); }}
          />
        </div>
      </div>
      <div style={{ paddingBlock: '14px' }}></div>
    </div>
  );
}

export default Customer;