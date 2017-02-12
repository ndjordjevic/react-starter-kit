/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';

function Home(props) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>React.js News</h1>
        {props.news.map(item => (
          <article key={item.link} className={s.newsItem}>
            <h1 className={s.newsTitle}><a href={item.link}>{item.title}</a></h1>
            <div
              className={s.newsDesc}
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          </article>
        ))}
      </div>
    </div>
  );
}

Home.propTypes = {
  news: React.PropTypes.arrayOf(React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    link: React.PropTypes.string.isRequired,
    contentSnippet: React.PropTypes.string,
  })).isRequired,

};

export default withStyles(s)(Home);
