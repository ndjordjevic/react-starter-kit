/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Page.css';

function Page(props) {
  const { title, html } = props;
  return (
    <div className={s.root}>
      <div className={s.container}>
        {title && <h1>{title}</h1>}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}

Page.propTypes = {
  title: React.PropTypes.string,
  html: React.PropTypes.string.isRequired,
};

export default withStyles(s)(Page);