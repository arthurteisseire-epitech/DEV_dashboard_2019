/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip
} from "reactstrap";
// core components
import Header from "components/Dashboard/Dashboard.jsx";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherCity: "",
      youtubeVideos: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
        <>
          <Header/>
          {/* Page content */}
          <Container className="mt--7" fluid>
            {/* Dark table */}
            <Row className="mt-5">
              <div className="col">
                <Card className="bg-default shadow">
                  <CardHeader className="bg-transparent border-0">
                    <h3 className="text-white mb-0">Widget Settings</h3>
                  </CardHeader>
                  <form>
                    <label>
                      Weather City:
                      <input
                          name="weatherCity"
                          type="text"
                          checked={this.state.weatherCity}
                          onChange={this.handleInputChange} />
                    </label>
                    <br />
                    <label>
                      Youtube Videos:
                      <input
                          name="youtubeVideos"
                          type="text"
                          value={this.state.youtubeVideos}
                          onChange={this.handleInputChange} />
                    </label>
                    <label>
                      Submit :
                      <input
                          name="submit"
                          type="submit"
                          value={this.state.youtubeVideos}
                          onChange={this.handleInputChange} />
                    </label>
                  </form>
                </Card>
              </div>
            </Row>
          </Container>
        </>
    );
  }
}

export default Settings;
