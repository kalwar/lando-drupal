import React from 'react';

function Footer() {
  return (
    <div className="container-fluid text-center text-white m-0 py-2 d-flex flex-column justify-content-center" style={{ backgroundColor: 'var(--accent-color)', position: 'absolute', bottom: '0', width: '100%', height: '8.5rem' }}>
      <small>&copy;bc.fi 2022</small>
      <p className='m-0'>Drupal and React - together!.</p>
      <p className='m-0'>MIT License.&nbsp;&nbsp;
        <a className='text-info' href='https://github.com/kalwar/lando-drupal' target='_blank' rel="noreferrer">View Source</a>
      </p>
    </div>
  );
}

export default Footer;