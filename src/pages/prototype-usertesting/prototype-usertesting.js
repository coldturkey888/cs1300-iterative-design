import './prototype-usertesting.css';
import React from 'react';
import { Link } from 'react-scroll';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import user1 from "./videos/user1.mp4";
import user2 from "./videos/user2.mp4";
import user3 from "./videos/user3.mp4";

function PrototypeUserTesting() {
  return (
    <div className="App-section" id="prototype-usertesting">
      <div className="prototype-usertesting-top-left-corner">Revised Prototype (User Testing)</div>
      <div className="prototype-usertesting-container">
        <iframe className="prototype-usertesting-embed"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F3X3IsHmxG6uYdgItHi8QzD%2FRadius-(User-Testing)%3Fnode-id%3D4%253A874%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D4%253A874"
          allowFullScreen />
        <div className="prototype-usertesting-feedback">
          <div>
            We used UserTesting.com to complete three user tests. Before beginning the tests,
            users were given this introduction in order to provide context: <b>“You are in Indonesia
              and ordering groceries to your house. Please note this is a prototype, so there is limited
              functionality”</b>. Their screen and audio was then recorded as they interacted with the
              prototype and responded to prompts.
          </div> 
          <div className="prototype-usertesting-tabs-container">
            <Tabs>
              <TabList>
                <Tab>Task</Tab>
                <Tab>Questions & Responses</Tab>
                <Tab>Interface Changes</Tab>
                <Tab>Recordings</Tab>
              </TabList>

              {/* Task */} 
              <TabPanel className="tab-panel">
                <div className="tab-panel-content">
                  <h3>Main Task</h3>
                  
                  <p>We asked users to complete one main task: <b>"Add two eggs from IndoMarket to your cart and check-out the order,
                  using the address saved as 'home' and the saved credit card for payment"</b>. After completing the task, users
                  were asked two multiple-choice follow-up questions:</p>
                  
                  <ol>
                    <li>Did you complete the task successfully?
                      <ul>
                        <li>Yes, I'm sure I completed the entire task successfully.</li>
                        <li>No, I'm not sure if I completed the entire task successfully.</li>
                        <li>No, the task took too long that I gave up.</li>
                        <li>No, the site's information on navigation was poor.</li>
                        <li>No, I encountered an error or a bug.</li>
                        <li>No, I was confused by the task instructions.</li>
                        <li>No, other (please explain out loud).</li>
                      </ul>
                    </li>
                    <li>Overall this task was:
                      <ul>
                        <li>1 - Very difficult</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5 - Very easy</li>
                      </ul>
                    </li>
                  </ol>  

                  <h3>Task Steps</h3>
                  <p>In order for a user to successfully complete this task, they had to complete the following process.
                    <i>This step breakdown was not provided to users.</i>
                  </p>

                  <ol> 
                    <li>From the list of stores on the home page, click on IndoMarket.</li>
                    <li>From the IndoMarket store page, click on eggs from the list of grocery items.</li>
                    <li>Choose 2 as the quantity of cartons and click on the “Add to cart” button.</li>
                    <li>Click on shopping bag icon to get to the check-out page.</li>
                    <li>On the checkout page, make sure that correct address and payment information is chosen.</li>
                    <li>Click on the "Submit Order" button.</li>
                    <li>Done! The user can now see order and delivery details.</li>
                  </ol>

                  <h3>Results</h3>
                  <p>
                    All three users accurately believed that they succesfully completed the task and they all chose the highest ranking
                    (5 - Very easy) for task ease.  This is in line with our goal of learnability and user intuitiveness. There were no
                    errors in the process of completing the task.
                  </p>

                  <p>
                    The only deviation from the outlined process was when one user tried to search for the store
                    name “IndoMarket” instead of clicking on it from the home page. We do not count this as an error,
                    as it is a valid approach for the task and would have achieved the goal if the app was fully implemented.
                    This course of action supports our decision to implement a search bar, providing one user case scenario of
                    how the search option could be helpful. Once the user saw that the search option functionality was not
                    implemented as part of the prototype, they went back to the home page and chose IndoMarket from the list of stores,
                    successfully continuing on the path to submitting an order.
                  </p>

                  <h3>Additional Task & Results</h3>

                  <p>
                    In addition to the main task above, we also asked users to complete a smaller separate task: "<b>Check on the
                    process of your most recent ongoing order” </b>. This is achieved by clicking on the left-most order on the
                    "Orders in progress" section of the home page. Again, all three users accurately believed that they successfull
                    completed the task and they all chose the highest ranking (5 - Very easy) for task ease. We believe that these
                    results are a positive reflection of the app's learnability. 
                  </p>
                </div>
              </TabPanel>

               {/* Questions & Responses */} 
               <TabPanel className="tab-panel">
               <div className="tab-panel-content">
                  <p> We asked users a number of questions throughout the process in order to gauge their initial
                    reactions to the app, as well as some post-test questions to get feedback.
                    Below is a list of the prompts and a summary of user feedback. </p> 

               <table>
                  <th className="table-first-column">Prompt</th>
                  <th className="table-second-column">Summary of User Feedback</th>
                  <tr>
                    <td>Without leaving the homepage, what are your initial impressions of the app? Explain your answer.</td>
                    <td>
                      <b>User 1</b>
                      <ul>
                        <li>Likes the color scheme & categorization</li>
                        <li>Loves seeing the discount</li>
                      </ul>
            
                      <b>User 2</b>
                      <ul>
                        <li>Colors stand out (red and gold signify action)</li>
                        <li>Do not see a brand ("Radius" is just text, doesn't look like brand)</li>
                        <li>Discount stands out, which is a good thing</li>
                        <li>Difference between "orders in progress" & "completed orders" is confusing</li>
                        <li>Likes seeing distance away for each store</li>
                      </ul>

                      <b>User 3</b>
                      <ul>
                        <li>First thing user notices is discount</li>
                        <li>Confused by "orders in progress"</li>
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <td>Take as much time as you need to explore this app. Move on to the next task when you're ready</td>
                    <td>
                      <b>User 1</b>
                      <ul>
                        <li>Likes seeing all the order details, including delivery time and timeline, and the option of re-ordering a previous order</li>
                        <li>Likes the organization & details of the check-out page</li>
                      </ul>

                      <b>User 2</b>
                      <ul>
                        <li>For order details, seeing a step-by-step and expected delivery is helpful and matches what the user would expect from a food
                          delivery app. With the user's hectic schedule, it's nice to be able to check delivery time to make sure she will be
                          available at that time</li>
                        <li>Likes seeing delivery fee right at the top of the store details, as it's not hidden</li>
                        <li>Would like to see more headers for grocery sections, such as "toiletries" and "organic"</li>
                        <li>In check-out page, recommends making the plus sign for adding delivery address and payment method bolder &
                          adding a way to remove items from shopping bag</li>
                        <li>Lots of colors; branding needs more cohesion</li>
                      </ul>

                      <b> User 3</b>
                      <ul>
                        <li>Likes the layout of the order details because it is familiar</li>
                        <li>Likes option to order again</li>
                        <li>Likes the cart view because it is simple but functional, has options to change delivery address, and likes the icons for home and workplace</li>
                        <li>Search option is understandable and looks great</li> 
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <td>What, if anything, is missing on this app?</td>
                    <td>
                      <b>User 1</b>
                      <ul>
                        <li>Not missing anything</li>
                      </ul>

                      <b>User 2</b>
                      <ul>
                        <li>Would like to have option of designating a store to open automatically for recurring customers, with the option of changing it</li>
                        <li>Needs brand cohesion</li>
                      </ul>

                      <b>User 3</b>
                      <ul>
                        <li>Confused by what "Radius" means but thinks it's app name</li>
                        <li>Nothing missing</li>
                      </ul>
                    </td>
                  </tr>

                  <tr>
                    <td>How unlikely or likely are you to shop from this app in the future? Explain your answer</td>
                    <td>
                      <b>User 1</b>
                      <ul>
                        <li>Yes, very likely to use app again (love that there are lots of images in the app & overall organization)</li>
                      </ul>

                      <b>User 2</b>
                      <ul>
                        <li>Yes. It needs a little work, but would be nice to have if in the area</li>
                        <li>Would like the option of adding text message updates</li>
                      </ul>

                      <b>User 3</b>
                      <ul>
                        <li>Pretty likely to shop from this app because it is easy to use and customer friendly</li>
                        <li>Recommends making design more exciting</li>
                      </ul>
                    </td>
                  </tr>
                </table>
                </div>
              </TabPanel>

              {/* Interface Changes */} 
              <TabPanel className="tab-panel">
              <p>Using users' responses to given questions, we have created a list of interface changes we could implement:</p>

              <ul>
                <li> More cohesion in the color scheme. We can achieve this by changing all the section headings in the different app pages to the same maroon color used in the home page, as well as changing the background color of each square in the ongoing orders section to the same maroon color.</li>
                <li> Clearer branding through creating an intuitive logo (potential example: incorporating a graphic of a grocery bag) and making the app name ("Radius") bigger on the home page. </li>
                <li> Adding an option to remove items from cart by having a small red "x" next to each item on the check-out page. </li>
                <li> Allowing users to choose favorite stores so that recurring users can find these stores quickly. </li>
                <li> Re-naming "Orders in progress" to "Deliveries on the way" to prevent confusion. </li>
                <li> In check-out page, make the plus sign for adding delivery address and payment methods bold so it is clear that it is a button. </li>
              </ul>
              </TabPanel>

              {/* Recordings */} 
              <TabPanel className="tab-panel">
                <p>Click on each link to watch the videos of the user tests:</p>
                <ul>
                  <li><a href = {user1} target = "_blank">User 1</a></li>
                  <li><a href = {user2} target = "_blank">User 2</a></li>
                  <li><a href = {user3} target = "_blank">User 3</a></li>
                </ul>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
      <Link className="bottom-right" activeClass="active" to="context" spy={true} smooth={true}>
        <div className="prototype-usertesting-bottom-right-corner">Back to the top</div>
      </Link>
    </div>
  );
}

export default PrototypeUserTesting;
  