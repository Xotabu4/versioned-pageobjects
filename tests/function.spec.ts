import { FunctionHomePage } from '../pages/home/index';
import { testsBody } from './body';


describe('When using function that wraps class to Proxy object:', function () {
    testsBody(FunctionHomePage)
});