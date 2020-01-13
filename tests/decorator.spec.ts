import { testsBody } from './body';
import { DecoratedHomePage } from '../pages/home/index';

describe('When using function that wraps class to Proxy object:', function () {
    testsBody(DecoratedHomePage)
});