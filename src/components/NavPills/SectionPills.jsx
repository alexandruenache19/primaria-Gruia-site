import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItem.jsx";
import NavPills from "./NavPills.jsx";

class SectionPills extends React.Component {
  render() {
    return (
      <div id="navigation-pills">
          <GridItem xs={12}>
            <NavPills
              color="primary"
              tabs={[
                {
                  tabButton: "Acte Necesare",
                  tabIcon: Dashboard,
                  tabContent: (
                    <span>
                      <p>
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate
                        B2C users after installed base benefits.
                      </p>
                    </span>
                  )
                },
                {
                  tabButton: "Proiecte",
                  tabIcon: Schedule,
                  tabContent: (
                    <span>
                      <li>
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly maximize timely
                        deliverables for real-time schemas.
                      </li>
                      <li>
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly maximize timely
                        deliverables for real-time schemas.
                      </li>
                    </span>
                  )
                },
                {
                  tabButton: "Informatii publice",
                  tabIcon: List,
                  tabContent: (
                    <span>
                      <p>
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate
                        B2C users after installed base benefits.
                      </p>
                    </span>
                  )
                },
                {
                  tabButton: "Buget",
                  tabIcon: List,
                  tabContent: (
                    <span>
                      <p>
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate
                        B2C users after installed base benefits.
                      </p>
                    </span>
                  )
                },
                {
                  tabButton: "Program cu publicul",
                  tabIcon: List,
                  tabContent: (
                    <span>
                      <p>
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate
                        B2C users after installed base benefits.
                      </p>
                    </span>
                  )
                },
                {
                  tabButton: "Anunturi",
                  tabIcon: List,
                  tabContent: (
                    <span>
                      <p>
                        Collaboratively administrate empowered markets via
                        plug-and-play networks. Dynamically procrastinate
                        B2C users after installed base benefits.
                      </p>
                    </span>
                  )
                }
              ]}
            />
          </GridItem>
      </div>
    );
  }
}

export default (SectionPills);
