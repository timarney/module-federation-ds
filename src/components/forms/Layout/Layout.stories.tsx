import React from "react";
import Layout from "./Layout";
import H1 from "../H1/H1";
import Dropdown from "../Dropdown/Dropdown";
import SectionHeader from "../SectionHeader/SectionHeader";
import MultipleChoice from "../MultipleChoice/MultipleChoice";
import Paragraph from "../Paragraph/Paragraph";
import FormGroup from "../FormGroup/FormGroup";
import TextInput from "../TextInput/TextInput";
import TextArea from "../TextArea/TextArea";
import Checkboxes from "../Checkboxes/Checkboxes";
import Button from "../Button/Button";

export default {
  title: "Forms/Layout",
  component: Layout,
  parameters: {
    info: `Layout`,
  },
};

export const defaultLayout = (): React.ReactElement => (
  <Layout>
    <H1 heading="Grant Application for Funding – Enabling Accessibility Fund (EAF) - Small Projects Component" />

    <Paragraph text="The Enabling Accessibility Fund provides funding for eligible capital projects that increase accessibility for people with disabilities in Canadian communities and workplaces. It creates more opportunities for people with disabilities to participate in." />

    <MultipleChoice
      label="Funding Requested"
      options={["Community Accessibility", "Workplace Accessibility"]}
      id="1"
    />
    <MultipleChoice
      label="Project Category"
      options={[
        "Ramp",
        "Accessible Washroom",
        "Accessible Door",
        "Other Project",
      ]}
      id="2"
    />
    <SectionHeader>1. Organization Identification</SectionHeader>
    <TextInput label="Legal name" id="3a" name="legal-name" type="text" />
    <TextInput
      label="Operating name"
      id="3b"
      name="operating-name"
      type="text"
    />
    <TextInput
      label="Year established"
      id="4"
      name="year-established"
      type="number"
    />
    <MultipleChoice
      label="Organization type"
      options={["Not-for-profit", "Private sector", "Public sector"]}
      id="5"
    />
    <TextInput
      label="Organization category"
      id="6"
      name="organization-category"
      type="text"
    />
    <TextInput
      label="Canada Revenue Agency (CRA) Business Number"
      id="7"
      name="cra-number"
      type="text"
    />

    <Paragraph text="If you do not have a CRA Business Number, provide one of the following:" />
    <Paragraph text="For example: Your provincial/territorial corporation number (i.e. number found on your Letters Patent) or your federal corporation number with Industry Canada (see Applicant Guide for further details)." />

    <MultipleChoice
      label="CRA Business Number"
      options={[
        "I have a registered number",
        "I have provided a separate document confirming the proof of operations for my organization.",
      ]}
      id="8"
    />
    <TextArea
      label="Specify documentation or registered number"
      id="9"
      name="cra-documentation"
    />

    <SectionHeader>2. Organization Primary Address</SectionHeader>

    <TextInput
      label="Street number and name"
      id="10"
      name="street-number"
      type="text"
    />

    <TextInput label="City or town" id="11" name="city" type="text" />

    <Dropdown
      key="12"
      id="12"
      name="province"
      label="Province or Territory"
      choices={[
        "",
        "Alberta",
        "British Columbia",
        "Manitoba",
        "New Brunswick",
        "Newfoundland",
        "Northwest Territories",
        "Nova Scotia",
        "Nunavut",
        "Ontario",
        "Prince Edward Island",
        "Quebec",
        "Saskatchewan",
        "Yukon",
      ]}
    />
    <TextInput label="Postal Code" id="13" name="postal-code" type="text" />
    <TextInput label="Country" id="14" name="country" type="text" />
    <TextInput
      label="Telephone Number and Ext."
      id="15"
      name="telephone"
      type="tel"
    />
    <TextInput label="Email address" id="16" name="email" type="email" />
    <MultipleChoice
      label="Is your mailing address the same as the Organization Primary Address?"
      options={["Yes", "No"]}
      id="17"
    />
    <Checkboxes
      id="18"
      label="Select the target group(s) that best aligns with your organization’s primary activities"
      options={[
        "Select all groups",
        "Seniors",
        "Newcomers",
        "Visible Minorities",
        "Youth",
        "Women",
        "LGBTQ2",
        "People with Disabilities",
        "Low Income",
        "Remote / Rural",
        "Individuals Experiencing Homelessness",
        "Official Language Minority Communities",
        "Not Applicable",
      ]}
    />
    <MultipleChoice
      label="Is your mailing address the same as the Organization Primary Address?"
      options={["Yes", "No"]}
      id="19"
    />

    <TextArea
      label="Organization's primary activities"
      description="(In no more than 500 words, provide a description of your organization’s primary activities.)"
      id="20"
      name="cra-documentation"
    />

    <SectionHeader>3. Primary Contact</SectionHeader>
    <Paragraph text="This should be your primary contact person with respect to this application for funding." />
    <FormGroup legend="Given Name / Surname" name="primary-name">
      <TextInput label="Name" id="a" name="primary-name" type="text" />
      <TextInput label="Surname" id="b" name="primary-surname" type="text" />
      <TextInput
        label="Position Title"
        id="21"
        name="primary-position"
        type="text"
      />
    </FormGroup>
    <FormGroup
      legend="Preferred Language of Communication"
      name="preferred-language"
    >
      <MultipleChoice label="Written" options={["English", "French"]} id="22" />
      <MultipleChoice label="Spoken" options={["English", "French"]} id="23" />
      <MultipleChoice
        label="Primary contact address"
        options={[
          "Same as Organization Primary Address",
          "Same as Organization Primary Mailing Address",
          "Different (include below)",
        ]}
        id="24"
      />
    </FormGroup>
    <SectionHeader>4. Secondary Contact</SectionHeader>
    <Paragraph text="This should be your secondary contact person with respect to this application for funding in case we cannot reach the primary contact." />
    <FormGroup
      legend="Preferred Language of Communication"
      name="preferred-language"
    >
      <MultipleChoice label="Written" options={["English", "French"]} id="25" />
      <MultipleChoice label="Spoken" options={["English", "French"]} id="26" />
      <MultipleChoice
        label="Secondary contact address"
        options={[
          "Same as Organization Primary Address",
          "Same as Organization Primary Mailing Address",
          "Different (include below)",
        ]}
        id="27"
      />
      <MultipleChoice
        label="Does your organization owe any amounts of money to the government?"
        options={["Yes", "No"]}
        id="28"
      />
      <Paragraph text="If yes, complete the fields below for each amount owing" />
    </FormGroup>

    <FormGroup legend="Entry 1 - Amount owing" name="entry1-owing">
      <TextInput
        label="Amount owing"
        id="29"
        name="entry1-amount"
        type="number"
      />
      <TextInput
        label="Nature of amount owing (e.g. taxes, penalties, overpayments)"
        id="30"
        name="entry1-nature"
        type="text"
      />
      <TextInput
        label="Department or agency to which the amount is owed"
        id="31"
        name="entry1-agency"
        type="text"
      />
      <MultipleChoice
        label="If an amount is owing, is a payment plan in place?"
        options={["Yes", "No"]}
        id="32"
      />
    </FormGroup>
    <SectionHeader>5. Organization Contacts</SectionHeader>
    <FormGroup legend="Project proposal identification" name="proposal-id">
      <TextInput
        label="Project title"
        id="33"
        name="project-title"
        type="text"
      />
      <TextInput
        label="Planned project start date"
        id="34"
        name="project-start"
        type="text"
      />
      <TextInput
        label="Planned project end date"
        id="35"
        name="project-end"
        type="text"
      />
      <TextInput
        label="Amount requested from Employment and Social Development Canada"
        id="36"
        name="project-amount-requested"
        type="number"
      />
    </FormGroup>
    <FormGroup name="project-description" legend="Project Proposal Description">
      <TextArea
        label="Project summary"
        description="In 500 words or less, describe the need of the proposed project including what it aims to achieve (objective and anticipated results), and who is the targeted group."
        id="37"
        name="project-summary"
      />

      <TextArea
        label="Project objectives"
        description="In 500 words or less, describe the need of the proposed project including what it aims to achieve (objective and anticipated results), and who is the targeted group."
        id="38"
        name="project-objectives"
      />

      <TextArea
        label="If yes you answered yes, in about 250 words, provide an explanation and any details on the actions and communication activities you will take to meet that community’s needs"
        description="In 500 words or less, describe the need of the proposed project including what it aims to achieve (objective and anticipated results), and who is the targeted group."
        id="39"
        name="project-objectives"
      />
      <Checkboxes
        id="40"
        label="Select the specific requirements that apply to your project:"
        options={[
          "Modifications to structural walls",
          "Modifications to non-structural walls",
          "Modifications to heating, ventilation and air conditioning (HVAC) system (for example moving or rerouting ducts)",
          "Modifications to electrical",
          "Modifications to existing plumbing locations",
          "Modifications to add new plumbing lines",
          "Modification to counters, vanities, cupboards or mirrors2",
        ]}
      />
      <Button type="submit">Submit</Button>
    </FormGroup>
  </Layout>
);
