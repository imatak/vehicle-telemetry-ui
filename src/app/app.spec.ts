import { AppComponent } from './app';

describe('AppComponent', () => {
  it('should create the app', () => {
    const component = new AppComponent({} as any, {} as any);
    expect(component).toBeTruthy();
  });
});
