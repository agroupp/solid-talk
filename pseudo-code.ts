


abstract class AnalyticsService {
  abstract trackEvent(name: string): void;
}

class MixpanelService implements AnalyticsService {
  trackEvent(name: string) {}
}

class MyComponent {
  constructor(private mixpanelService: AnalyticsService) {}

  trackEvent(name: string) {
    this.mixpanelService.trackEvent(name);
  }
}








// class MyComponent {
//   constructor(private mixpanelService: MixpanelService) {}

//   trackEvent(name: string) {
//     this.mixpanelService.trackEvent(name);
//   }
// }






