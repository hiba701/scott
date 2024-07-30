import React, { useState, useEffect } from 'react';
import Isotope from 'isotope-layout';
import GLightbox from 'glightbox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";
import { GrAttachment } from "react-icons/gr";
import './Portfolio.css';

const Portfolio = () => {
  const [filter, setFilter] = useState('*');
  const [items, setItems] = useState([
    { id: 1, price: 100, category: 'sculptures', image: '/Assets/Images/s1.jpg', story: "Each sculpture in this collection is a testament to transformation. Crafted from discarded metals and found objects, these pieces tell the story of industrial detritus becoming dynamic forms. They capture the essence of resilience and reinvention, turning what was once overlooked into powerful symbols of artistic rebirth.", likes: 0 },
    { id: 2, price: 200, category: 'art', image: '/Assets/Images/a1.jpg', story: "In this collection of wall art, every piece narrates a journey from the mundane to the magnificent. Using recycled papers, fabrics, and plastics, these artworks explore themes of renewal and change. They invite viewers to see beauty in the discarded and to appreciate the stories woven into each layer of material.", likes: 0 },
    { id: 3, price: 300, category: 'sculptures', image: '/Assets/Images/s2.jpg', story: "Each sculpture in this collection is a testament to transformation. Crafted from discarded metals and found objects, these pieces tell the story of industrial detritus becoming dynamic forms. They capture the essence of resilience and reinvention, turning what was once overlooked into powerful symbols of artistic rebirth.", likes: 0 },
    { id: 4, price: 400, category: 'functional', image: '/Assets/Images/f1.jpg', story: "This collection of functional items bridges the gap between utility and creativity. Each piece is designed not just to serve a purpose but to tell a story of sustainability. Crafted from reclaimed materials, these items blend practicality with artistry, proving that everyday objects can carry a message of environmental consciousness and innovative design.", likes: 0 },
    { id: 5, price: 500, category: 'art', image: '/Assets/Images/a2.jpg', story: "In this collection of wall art, every piece narrates a journey from the mundane to the magnificent. Using recycled papers, fabrics, and plastics, these artworks explore themes of renewal and change. They invite viewers to see beauty in the discarded and to appreciate the stories woven into each layer of material.", likes: 0 },
    { id: 6, price: 100, category: 'sculptures', image: '/Assets/Images/s3.jpg', story: "Each sculpture in this collection is a testament to transformation. Crafted from discarded metals and found objects, these pieces tell the story of industrial detritus becoming dynamic forms. They capture the essence of resilience and reinvention, turning what was once overlooked into powerful symbols of artistic rebirth.", likes: 0 },
    { id: 7, price: 100, category: 'functional', image: '/Assets/Images/f3.jpg', story: "This collection of functional items bridges the gap between utility and creativity. Each piece is designed not just to serve a purpose but to tell a story of sustainability. Crafted from reclaimed materials, these items blend practicality with artistry, proving that everyday objects can carry a message of environmental consciousness and innovative design.", likes: 0 },
    { id: 8, price: 100, category: 'art', image: '/Assets/Images/a3.jpg', story: "In this collection of wall art, every piece narrates a journey from the mundane to the magnificent. Using recycled papers, fabrics, and plastics, these artworks explore themes of renewal and change. They invite viewers to see beauty in the discarded and to appreciate the stories woven into each layer of material.", likes: 0 }
  ]);
  const [visibleItemsCount, setVisibleItemsCount] = useState(6);
  const [filteredItems, setFilteredItems] = useState(items);
  const [showingAll, setShowingAll] = useState(false); // Track if showing all items

  const navigate = useNavigate();

  // Filter items based on the selected filter
  useEffect(() => {
    const newFilteredItems = items.filter(item => filter === '*' || item.category === filter);
    setFilteredItems(newFilteredItems);
    setVisibleItemsCount(6); // Reset visible items count on filter change
    setShowingAll(false); // Reset showing all status on filter change
  }, [filter, items]);

  // Initialize Isotope and GLightbox
  useEffect(() => {
    const portfolioContainer = document.querySelector('.portfolio-container');
    const portfolioIsotope = new Isotope(portfolioContainer, {
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows',
    });

    // Handle filter click
    const portfolioFilters = document.querySelectorAll('#portfolio-flters li');
    portfolioFilters.forEach((filterItem) => {
      filterItem.addEventListener('click', (e) => {
        e.preventDefault();
        portfolioFilters.forEach((item) => item.classList.remove('filter-active'));
        filterItem.classList.add('filter-active');
        const filterValue = filterItem.getAttribute('data-filter');
        setFilter(filterValue);
        portfolioIsotope.arrange({ filter: filterValue });
      });
    });

    // Initialize GLightbox
    GLightbox({ selector: '.portfolio-lightbox' });

    return () => {
      portfolioFilters.forEach((filterItem) => {
        filterItem.removeEventListener('click', () => { });
      });
    };
  }, [filter]);

  // Handle Show More / Show Less
  const handleToggleShowMore = () => {
    if (showingAll) {
      setVisibleItemsCount(6);
      setShowingAll(false);
    } else {
      setVisibleItemsCount(filteredItems.length);
      setShowingAll(true);
    }
  };

  // Handle item click
  const handleAttachmentClick = (id) => {
    const product = items.find(item => item.id === id);
    navigate(`/product/${id}`, { state: { product } });
  };

  // Handle like click
  const handleLikeClick = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, likes: item.likes + 1 } : item
    ));
  };

  // Determine items to display based on visibility count
  const displayedItems = filteredItems.slice(0, visibleItemsCount);
  const showMoreVisible = filteredItems.length > 6;

  useEffect(() => {
    // Refresh Isotope layout when items are updated
    const portfolioContainer = document.querySelector('.portfolio-container');
    const portfolioIsotope = new Isotope(portfolioContainer, {
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows',
    });
    portfolioIsotope.layout(); // Recalculate item positions
  }, [filteredItems, visibleItemsCount]);

  return (
    <div id="portfolio" className="paddsection">
      <div className="container">
        <div className="section-title text-center contact">
          <h2 className='contact__heading title text-center'>My Portfolio</h2>
        </div>
      </div>

      <div className="container images">
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-app">Sculptures</li>
              <li data-filter=".filter-card">Art</li>
              <li data-filter=".filter-web">Functional</li>
            </ul>
          </div>
        </div>

        <div className="row w-100 portfolio-container">
          {displayedItems.map((item) => (
            <div key={item.id} className={`col-lg-4 col-md-6 portfolio-item ${item.category}`}>
              <img src={item.image} className="img-fluid" alt={item.category} />
              <div className="portfolio-info">
                <h4>{item.category}</h4>
                <div className='details'>
                  <GrAttachment onClick={() => handleAttachmentClick(item.id)} />
                  <div className='likes'>
                    <FaHeart className='likeicon' onClick={() => handleLikeClick(item.id)} />
                    <p>{item.likes}</p>
                  </div>
                </div>
                <a
                  href={item.image}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox preview-link"
                  title={item.category}
                >
                  <i className="bx bx-plus"></i>
                </a>
                <a href="portfolio-details.html" className="details-link" title="More Details">
                  <i className="bx bx-link"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showMoreVisible && (
        <div className='show-more-div'>
          <p className='show-more' onClick={handleToggleShowMore}>
            {showingAll ? 'Show less' : 'Show more'}
          </p>
        </div>
      )}
    </div>
  );
};

//exporting
export default Portfolio;
