import './prototype-crit.css';
import React from 'react';
import { Link } from 'react-scroll';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function PrototypeCrit() {
  return (
    <div className="App-section" id="prototype-crit">
      <div className="prototype-crit-top-left-corner">Initial Prototype (Mockup Crit)</div>
      <div className="prototype-crit-container">
        <iframe className="prototype-crit-embed"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FH9belwczniSJ2JBvoptgDI%2FRadius-(Crit)%3Fnode-id%3D2%253A2%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D2%253A2"
          allowFullScreen />
        <div className="prototype-crit-feedback">
          <div>During the mockup crit, we received valuable feedback from our fellow designers, to whom we are grateful. We've organized the feedback as such:</div>
          <div className="prototype-crit-tabs-container">
            <Tabs>
              <TabList>
                <Tab>General</Tab>
                <Tab>Home</Tab>
                <Tab>Store</Tab>
                <Tab>Checkout</Tab>
                <Tab>Order Status</Tab>
              </TabList>

              {/* General */} 
              <TabPanel className="tab-panel">
                <table>
                  <th className="table-first-column">Feedback received</th>
                  <th className="table-second-column">Our response</th>
                  <tr>
                    <td>Should have a tabbed navigation bar at the bottom</td>
                    <td>
                      {renderAcceptStatus(false)}
                      Tabbed navigation bars do help to organize an app with many pages. However, they
                      could potentially be distracting to the user, especially if they are not used to it.
                      Due to the simple nature of our prototype, we decided to maintain the simple view
                      without a navigation bar.
                    </td>
                  </tr>
                  <tr>
                    <td>Some of the links on the prototype do not make sense. For example, on the home page, 
                      tapping on Alfamart's order leads to IndoMarket's order status page.
                    </td>
                    <td>
                      {renderAcceptStatus(true)}
                      We agree that this could be confusing. In the revised prototype, only the specific
                      IndoMarket element will be linked to IndoMarket's order status page. We have also removed
                      other confusing links across the prototype.
                    </td>
                  </tr>
                  <tr>
                    <td>Display item count on shopping bag/cart icon.</td>
                    <td>
                      {renderAcceptStatus(true)}
                      Users would be able to tell from a quick glance how many items they have in their cart.
                    </td>
                  </tr>
                </table>
              </TabPanel>

               {/* Home */} 
               <TabPanel className="tab-panel">
                <table>
                  <th className="table-first-column">Feedback received</th>
                  <th className="table-second-column">Our response</th>
                  <tr>
                    <td>The store location should be placed at the top (perhaps in the app header).</td>
                    <td>
                      {renderAcceptStatus(false)}
                      The store location isn't a setting that is often changed. Most users tend to buy groceries
                      from the same place. In the revised edition, we decided to place it where it is in order
                      to reduce clutter in the app header. We also adjusted the font size to make it less distracting. 
                    </td>
                  </tr>
                  <tr>
                    <td>The discount banner's shape and shadow make it look like a big, actionable button.
                      Consider changing the shape or a button inside the banner. Consider also using arrows to
                      indicate that the banner is scrollable.
                    </td>
                    <td>
                      {renderAcceptStatus(null)}
                      We agree that the discount banner's shadow could potentially be confusing. In our revised prototype,
                      we have removed the shadow. As for the shape of the banner, we decided to keep it as is to maintain
                      a consistent design on the home page. We find an arrows interface to be more appropriate for a pointer
                      device (e.g. desktop). For a mobile device, we decided to use a "page" indicator at the bottom of the carousel.
                      We've made the dots bigger and more visible to make it more obvious that the banner carousel is scrollable.
                    </td>
                  </tr>
                  <tr>
                    <td>The “Store in (Location)” header looks a little out of place and interferes a little with
                      the overall grid structure.
                    </td>
                    <td>
                      {renderAcceptStatus(true)}
                      To make the view neater, in our revised prototype, we decided to left-align all headers and move the location
                      icon and text to a right-aligned label.
                    </td>
                  </tr>
                </table>
              </TabPanel>

              {/* Store */} 
              <TabPanel className="tab-panel">
                <table>
                  <th className="table-first-column">Feedback received</th>
                  <th className="table-second-column">Our response</th>
                  <tr>
                    <td>Add a phone number on the store page so customers can contact the store.</td>
                    <td>
                      {renderAcceptStatus(false)}
                      We don't feel that this change would bring about much value to the user.
                    </td>
                  </tr>
                  <tr>
                    <td>There’s no way to add to cart when you click on specific item.</td>
                    <td>
                      {renderAcceptStatus(true)}
                      Our original philosophy was that whatever quantity is shown on the item card is the quantity
                      already in the cart. However, on second thought, we found that this could be confusing to the
                      user. We considered that the conceptual model of selecting the quantity an item before adding
                      it to cart would be more familiar and thereby more intuitive to the user. We have since added
                      the "Add to Cart" button to the item card.
                    </td>
                  </tr>
                </table>
              </TabPanel>

              {/* Checkout */} 
              <TabPanel className="tab-panel">
                <table>
                  <th className="table-first-column">Feedback received</th>
                  <th className="table-second-column">Our response</th>
                  <tr>
                    <td>There is no option to edit cart contents in checkout page.</td>
                    <td>
                      {renderAcceptStatus(true)}
                      We totally forgot... Fixed!
                    </td>
                  </tr>
                  <tr>
                    <td>After navigating from home page to checkout page, hitting the back button
                      takes the user to the store page instead of back to the home page.
                    </td>
                    <td>
                      {renderAcceptStatus(true)}
                      We've fixed this issue. Additionally, we've made the row of store information on the checkout page
                      tappable so that the user can easily navigate back to the store page should they find the need to do so.
                    </td>
                  </tr>
                  <tr>
                    <td>"Submit Order" button is small.</td>
                    <td>
                      {renderAcceptStatus(false)}
                      We found the button to be of an appropriate size. We also considered making it bigger, but we felt that
                      a button that is too big could potentially result in accidental presses.
                    </td>
                  </tr>
                  <tr>
                    <td>Tapping on items takes you back to the store page, which is confusing.</td>
                    <td>
                      {renderAcceptStatus(true)}
                      The original intention was to allow the user to navigate back to the specific item card on the store page.
                      However, since the prototype in its current state does not allow such functionality, we have removed these links.
                    </td>
                  </tr>
                </table>
              </TabPanel>

              {/* Order Status */} 
              <TabPanel className="tab-panel">
                <table>
                  <th className="table-first-column">Feedback received</th>
                  <th className="table-second-column">Our response</th>
                  <tr>
                    <td>Placing ongoing orders and past orders under the same row, and same section header ("Your previous orders"
                      on the home page) can be quite confusing.</td>
                    <td>
                      {renderAcceptStatus(true)}
                      We concur with this feedback. We considered color-coding the buttons to indicate the status of the order,
                      but we found this to not be the most intuitive nor the neatest solution. We have since moved the
                      "past orders" away, to be accessed via a separate button. We have also renamed the header on the home page
                      to "Orders in progress" to clarify the status of the listed orders.
                    </td>
                  </tr>
                  <tr>
                    <td>Feature request: having a button to recreate orders that are common or often repeated.</td>
                    <td>
                      {renderAcceptStatus(true)}
                      We find this to be a great idea! In our revised prototype, we've added an "Order Again" button to the order status page.
                    </td>
                  </tr>
                </table>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
      <Link className="bottom-right" activeClass="active" to="prototype-usertesting" spy={true} smooth={true}>
        <div className="prototype-crit-bottom-right-corner">Next: Revised Prototype (User Testing)</div>
      </Link>
    </div>
  );
}

function renderAcceptStatus(accepted) {
  if (accepted === null) {
    return (
      <div className="prototype-crit-accept-status">
        <div className="dot" id="orange">&#9679;</div>
        <div className="label">Partially Accepted</div>
      </div>
    );
  }
  if (accepted) {
    return (
      <div className="prototype-crit-accept-status">
        <div className="dot" id="green">&#9679;</div>
        <div className="label">Accepted</div>
      </div>
    );
  } else {
    return (
      <div className="prototype-crit-accept-status">
        <div className="dot" id="red">&#9679;</div>
        <div className="label">Not Accepted</div>
      </div>
    );
  }
}

export default PrototypeCrit;
  