import React from "react";
import { shallow } from "enzyme";
import GammaForm from "./";

describe("<GammaForm/>", () => {
  test("Shallow render of <GammaForm/>", () => {
    const wrapper = shallow(
      <GammaForm
        onSubmit={(values, actions) => {
          console.log(values);
          console.log(actions);
        }}
        initialValues={{
          user: "asdf",
          password: "fdas",
          userAgreement: true,
          mySwitch: false,
          icecream: "chocolate",
          number: "5000"
        }}
        render={() => (
          <div>
            <GammaFormField
              name="user"
              component={GammaTextField}
              componentProps={{ lowerLabel: "User" }}
            />

            <GammaFormField
              name="password"
              component={GammaTextField}
              componentProps={{ upperLabel: "this is password yes" }}
            />

            <GammaFormField
              name="userAgreement"
              component={GammaCheckbox}
              componentProps={{
                primary: true,
                label: "Jag accepterar användaravtalen"
              }}
            />

            <GammaFormField
              name="mySwitch"
              component={GammaSwitch}
              componentProps={{
                label: "This is a switch",
                primary: true
              }}
            />

            <GammaFormField
              name="icecream"
              component={GammaSelect}
              componentProps={{
                upperLabel: "Favorite Icecream flavor",
                lowerLabel: "Choose the best flavor",
                valueToTextMap: {
                  chocolate: "Chocolate",
                  vanilla: "Vanilla",
                  strawberry: "Strawberry"
                },
                allowToChooseNone: true
              }}
            />

            <GammaFormField
              name="number"
              component={GammaRadioButtonGroup}
              componentProps={{
                upperLabel: "Upperlabel",
                lowerLabel: "Lowerlabel",
                radioButtonMap: {
                  "5000": {
                    primary: true,
                    label: "Primary"
                  },
                  "4000": {
                    secondary: true,
                    label: "Secondary"
                  },
                  "3000": {
                    label: "Default"
                  },
                  "2000": {
                    disabled: true,
                    label: "Disabled"
                  }
                }
              }}
            />
            <GammaFABButton primary component={Add} submit />
          </div>
        )}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
