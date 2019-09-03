import Debug from 'debug';
import { PluginManager } from '@flowscripter/esm-dynamic-plugins';
import ExtensionPointA, { EXTENSION_POINT_A_ID } from './ExtensionPointA';
import ExtensionPointB, { EXTENSION_POINT_B_ID } from './ExtensionPointB';

const log = Debug('index');

export default async function commonApp(pluginManager: PluginManager<string>): Promise<void> {

    pluginManager.registerExtensionPoint(EXTENSION_POINT_A_ID);
    pluginManager.registerExtensionPoint(EXTENSION_POINT_B_ID);

    let count = await pluginManager.registerPluginsByExtensionPoint(EXTENSION_POINT_A_ID);
    log(`Loaded ${count} new plugins providing extensions for Extension Point A`);

    count = await pluginManager.registerPluginsByExtensionPoint(EXTENSION_POINT_B_ID);
    log(`Loaded ${count} new plugins providing extensions for Extension Point B`);

    const aExtensions = Array.from(pluginManager.getExtensions(EXTENSION_POINT_A_ID));
    log(`Registered ${aExtensions.length} extensions for Extension Point A`);

    const bExtensions = Array.from(pluginManager.getExtensions(EXTENSION_POINT_B_ID));
    log(`Registered ${bExtensions.length} extensions for Extension Point B`);

    const plugins = Array.from(pluginManager.getRegisteredPlugins());

    plugins.forEach((plugin): void => {
        log(`Plugin has data: ${plugin.pluginData}`);
    });

    for (const info of aExtensions) {
        log(`Extension for Extension Point A has data: ${info.extensionData}`);
        log(`Plugin for Extension Point A has data: ${info.pluginData}`);

        // eslint-disable-next-line no-await-in-loop
        const aExtension: ExtensionPointA = await pluginManager.instantiate(info.extensionHandle, 'Host');

        aExtension.sayHello();
    }

    for (const info of bExtensions) {
        log(`Extension for Extension Point B has data: ${info.extensionData}`);
        log(`Plugin for Extension Point B has data: ${info.pluginData}`);

        // eslint-disable-next-line no-await-in-loop
        const bExtension: ExtensionPointB = await pluginManager.instantiate(info.extensionHandle, 'Host');

        bExtension.sayGoodbye();
    }
}
