import Debug from 'debug';
import { BrowserPluginManager, PluginManager } from '@flowscripter/esm-dynamic-plugins';

const log = Debug('browser');

export default function (): PluginManager<string> {

    log('default()');

    return new BrowserPluginManager(['']);
}
