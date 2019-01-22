import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppModule } from './app/app.module';

// Import these globally to make teh typescript compiler happy by bringing in their @types
import 'angular';
import 'angular-resource';
import 'angular-route';
import 'angular-animate';

// Need to import NG 1.x module
import './app-ajs';

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
  // Use the upgrade module to bootstrap the hybrid
  const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.documentElement, ['phonecatApp']);
});