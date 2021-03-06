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
import s from './Admin.css';

function Admin(props) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h1>{props.title}</h1>
        <p>...</p>
      </div>
    </div>
  );
}

Admin.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default withStyles(s)(Admin);
