function hasUserSavedDetails(event) {
  if (event["formInput"] == undefined) {
    buildUserDetailsPage();
  }
  else {
    buildOrganisationList();
  }
};

function buildUserDetailsPage() {
  var card = CardService.newCardBuilder().setHeader(CardService.newCardHeader().setTitle('Enter your details'));

  var saveAndReturn = CardService.newAction().setFunctionName('saveAndReturn');

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
    .setOnClickAction(saveAndReturn));

  card.addSection(section);

  return card.build();

};

function buildOrganisationList() {
    var threads = GmailApp.getInboxThreads();
    var messages = GmailApp.getMessagesForThreads(threads);
    var from = [];

    for(var i = 0; i < threads.length; i++)
    {
      from.push([messages[i][0].getFrom(),i]);
    }

    from = from.filter(function(item, pos) { // Not working to remove duplicates, need to also remove numbers
      return from.indexOf(item) == pos;
    })
    throw (from)
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

function saveAndReturn() {
  saveDetails();
  buildOrganisationList();
};
