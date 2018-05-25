import { Selector } from 'testcafe';
import { Role } from 'testcafe';

//function to catch class
const elementWithIdOrClassName = Selector(value => {
    return document.getElementById(value) || document.getElementsByClassName(value);
});


fixture `Example page`
    .page `https://miller2.netzme.id:9898/static/cdd/index.html#`;
     
//press button sign in google authorize
const submitButtonExists   = Selector('submit').withText('Sign in with a Google Account').exists;
const submitButtonExists2   = Selector(elementWithIdOrClassName('btn'));
const passwordInput = Selector('#password');

//filter button
const filterButton = Selector(elementWithIdOrClassName('ag-header-icon ag-header-cell-menu-button'));

//approve button cdd
const approveButton_cdd = Selector(elementWithIdOrClassName('btn btn-success btn-lg  btn btn-secondary'));

//reject button cdd
const rejectButton_cdd = Selector(elementWithIdOrClassName('btn btn-danger btn-lg btn btn-secondary'));


//remove agent button
const remove_agent_button = Selector(elementWithIdOrClassName('custom-button custom-button-danger'));

//add agent button
const add_agent_button = Selector(elementWithIdOrClassName('custom-button custom-button-ok'));

//confirmaton remove agent
const confirm_remove_agent_button = Selector(elementWithIdOrClassName('btn btn-danger'));

//confirmaton add agent
const confirm_add_agent_button = Selector(elementWithIdOrClassName('btn btn-primary'));

//select table data to moving colom
const focus_table = Selector(elementWithIdOrClassName('ag-cell ag-cell-not-inline-editing ag-cell-no-focus'));

//checked data
const checked = Selector('span[ class = ag-selection-checkbox ]');


//create role to akses google authorize
const role_user = Role('https://miller2.netzme.id:9898/static/cdd/index.html#', async t =>{
    await t
     .click(submitButtonExists2)
     .typeText('#identifierId', 'xxxxxxx')
     .pressKey('enter')
     .typeText(passwordInput, 'xxxxxx')
     .pressKey('enter')
     
     ;
} );


test('approve_cdd', async t => {
   
    await t
     .useRole(role_user)
     


     
     .click(Selector(filterButton))
     .typeText('#filterText', '2018-05-02 10:54:00', { speed: 0.3 })
     .click(Selector(focus_table), { speed: 0.3 })
     .setTestSpeed(0.4)
     .pressKey('space ')
     .setTestSpeed(0.4)
     .click(Selector(approveButton_cdd))
     .click(Selector('input[value = Sekarang kamu bisa menjadi Agen Netzme]'))

     .debug()
     ;
     
});


test('add_agent', async t => {
   
    await t
     .useRole(role_user)
     

     .click(Selector(focus_table), { speed: 0.3 })
     .pressKey('right right right right right right right ')

     .click(Selector(filterButton))
     //.typeText('#filterText', '2018-05-02 15:24:14', { speed: 0.3 })
     .typeText('#filterText', '1npimOHP', { speed: 0.3 })
     .click(Selector(focus_table), { speed: 0.3 })
     .setTestSpeed(0.4)

     .pressKey('right right right right right right right right right right right')

     
     .click(Selector(add_agent_button).withText('Add As Agent'))
     
     .click(Selector(confirm_add_agent_button).withText('Add'))
     //.click(Selector(confirm_remove_agent_button).withText('Remove'))
     
     
     ;
     
});


test('remove_agent', async t => {
   
    await t
     .useRole(role_user)
     

     .click(Selector(focus_table), { speed: 0.3 })
     .pressKey('right right right right right right right ')

     .click(Selector(filterButton))
     //.typeText('#filterText', '2018-05-02 15:24:14', { speed: 0.3 })
     .typeText('#filterText', '1npimOHP', { speed: 0.3 })
     .click(Selector(focus_table), { speed: 0.3 })
     .setTestSpeed(0.4)

     .pressKey('right right right right right right right right right right right')

     
     .click(Selector(remove_agent_button).withText('Remove As Agent'))
     
     //.click(Selector(confirm_add_agent_button).withText('Add'))
     .click(Selector(confirm_remove_agent_button).withText('Remove'))
     
     .debug()
     ;
     
});




