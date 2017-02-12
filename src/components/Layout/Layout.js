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
import s from './Layout.css';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';

function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}
      <Feedback />
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default withStyles(s)(Layout);
