import Debug from 'debug';
import { NodePluginManager, PluginManager } from '@flowscripter/esm-dynamic-plugins';

const log = Debug('node');

export default function (): PluginManager<string> {

    log('default()');

    return new NodePluginManager();
}
