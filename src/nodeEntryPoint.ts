import { NodePluginManager, PluginManager } from '@flowscripter/esm-dynamic-plugins';
import commonApp from './commonApp';

(async (): Promise<void> => {
    const pluginManager: PluginManager<string> = new NodePluginManager();

    await commonApp(pluginManager);
})();
