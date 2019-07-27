import { BrowserPluginManager, PluginManager } from '@flowscripter/esm-dynamic-plugins';
import commonApp from './commonApp';

export default async (urls: string[]): Promise<void> => {
    const pluginManager: PluginManager<string> = new BrowserPluginManager(urls);

    await commonApp(pluginManager);
};
