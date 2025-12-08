declare module 'webpack-bundle-analyzer' {
  import type { Plugin } from 'webpack';

  export interface BundleAnalyzerPluginOptions {
    analyzerMode?: 'server' | 'static' | 'json' | 'disabled';
    analyzerHost?: string;
    analyzerPort?: number | 'auto';
    reportFilename?: string;
    defaultSizes?: 'stat' | 'parsed' | 'gzip';
    openAnalyzer?: boolean;
    generateStatsFile?: boolean;
    statsFilename?: string;
    statsOptions?: any;
    logLevel?: 'info' | 'warn' | 'error' | 'silent';
  }

  export class BundleAnalyzerPlugin extends Plugin {
    constructor(options?: BundleAnalyzerPluginOptions);
  }
}
