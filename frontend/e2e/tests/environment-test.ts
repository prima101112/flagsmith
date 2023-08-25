import { byId, click, log, login, setText, waitForElementVisible } from '../helpers.cafe';

const email = 'nightwatch@solidstategroup.com';
const password = 'str0ngp4ssw0rd!';
export default async function() {
    log('Login');
    await login(email, password);
    await click('#project-select-0');
    log('Create environment');
    await click('#create-env-link');
    await setText('[name="envName"]', 'Staging');
    await click('#create-env-btn');
    await waitForElementVisible(byId('switch-environment-staging-active'));
    log('Edit Environment');
    await click('#env-settings-link');
    await setText("[name='env-name']", 'Internal');
    await click('#save-env-btn');
    await waitForElementVisible(byId('switch-environment-internal-active'));
    log('Delete environment');
    await click('#delete-env-btn');
    await setText("[name='confirm-env-name']", 'Internal');
    await click('#confirm-delete-env-btn');
    await waitForElementVisible(byId('features-page'));
}
