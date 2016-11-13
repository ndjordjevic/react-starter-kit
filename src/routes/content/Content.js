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
import s from './Content.css';

function Content(props) {
  const { path, title, content } = props;
  return (
    <div className={s.root}>
      <div className={s.container}>
        {title && path !== '/' && <h1>{title}</h1>}
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
}

Content.propTypes = {
  path: React.PropTypes.string.isRequired,
  content: React.PropTypes.string.isRequired,
  title: React.PropTypes.string,
};

export default withStyles(s)(Content);
