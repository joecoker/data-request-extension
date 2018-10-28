function hasUserSavedDetails(userDetails) {
  if (userDetails == undefined) {
    buildUserDetailsPage();
  }
  else {
    buildOrganisationList();
  }
};

function buildUserDetailsPage() {
  var card = CardService.newCardBuilder().setHeader(CardService.newCardHeader().setTitle('Enter your details'));

  var saveAndReturnToMainMenu = CardService.newAction().setFunctionName('saveDetails');

  var section = CardService.newCardSection();
  section.addWidget(CardService.newTextInput()
    .setFieldName('userFullName')
    .setTitle('Enter your full name'));

  section.addWidget(CardService.newTextInput()
    .setFieldName('userDateOfBirth')
    .setTitle('Enter your date of birth')
    .setHint('DD/MM/YYYY'));

  section.addWidget(CardService.newTextInput()
    .setFieldName('userAddress')
    .setTitle('Enter your address')
    .setHint('Enter the first line of your address and your postcode'));

  section.addWidget(CardService.newTextButton()
    .setText('Save')
    .setOnClickAction(saveDetails));

  card.addSection(section);

  return card.build();

};

function buildOrganisationList() {

};

function saveDetails(formObject) {
  var userPersonalDetails = PropertiesService.getUserProperties();
  userPersonalDetails.setProperties({
    "userFullName": JSON.stringify(formObject.formInput["userFullName"]),
    "userDateOfBirth": JSON.stringify(formObject.formInput["userDateOfBirth"]),
    "userAddress": JSON.stringify(formObject.formInput["userDateofBirth"])
  });
  buildOrganisationList();
};