import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('renders Blog posts', () => {
    expect(component).to.exist;
  });
  it('blog post should have a title', () => {
    expect(component).to.exist;
  });
  it('should have a timestamp', () => {
    eexpect(component).to.exist;
  });
});
