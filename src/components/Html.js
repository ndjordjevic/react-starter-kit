/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { analytics } from '../config';

function Html(props) {
  const { title, description, styles, scripts, children } = props;
  return (
    <html className="no-js" lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        {styles.map(style =>
          <style
            key={style.id}
            id={style.id}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: style.cssText }}
          />,
        )}
      </head>
      <body>
        <div
          id="app"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: children }}
        />
        {scripts.map(script => <script key={script} src={script} />)}
        {analytics.google.trackingId &&
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: 'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' +
            `ga('create','${analytics.google.trackingId}','auto');ga('send','pageview')` }}
        />
        }
        {analytics.google.trackingId &&
        <script src="https://www.google-analytics.com/analytics.js" async defer />
        }
      </body>
    </html>
  );
}

Html.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  styles: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    cssText: React.PropTypes.string.isRequired,
  }).isRequired),
  scripts: React.PropTypes.arrayOf(React.PropTypes.string.isRequired),
  children: React.PropTypes.string.isRequired,
};

Html.defaultProps = {
  styles: [],
  scripts: [],
};

export default Html;
