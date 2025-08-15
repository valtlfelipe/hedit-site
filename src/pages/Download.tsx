import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Apple, Monitor, Terminal } from 'lucide-react';

// This is a placeholder. I will ask the user for the correct repository URL.
const GITHUB_REPO = 'valtlfelipe/hedit';

const fetchLatestRelease = async () => {
  const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/releases/latest`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

type OS = 'windows' | 'macos' | 'linux' | 'unknown';

const useOperatingSystem = () => {
  const [os, setOs] = useState<OS>('unknown');

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.indexOf("win") !== -1) setOs('windows');
    else if (userAgent.indexOf("mac") !== -1) setOs('macos');
    else if (userAgent.indexOf("linux") !== -1) setOs('linux');
  }, []);

  return os;
};

const DownloadPage = () => {
  const { data: release, isLoading, isError } = useQuery({ queryKey: ['latestRelease'], queryFn: fetchLatestRelease });
  const detectedOS = useOperatingSystem();

  const getAssetUrl = (name: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return release?.assets.find((asset: any) => asset.name.includes(name))?.browser_download_url;
  };

  // const totalDownloads = release?.assets.reduce((acc: number, asset: any) => acc + asset.download_count, 0) || 0;

  const renderDownloadCard = (os: OS, title: string, icon: React.ReactNode, intelUrl?: string, appleUrl?: string) => {
    const isDetected = detectedOS === os;
    return (
      <Card className={isDetected ? 'border-primary' : ''}>
        <CardHeader>
          <div className="flex items-center gap-4">
            {icon}
            <CardTitle>{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="flex flex-row gap-4">
          {appleUrl && <Button asChild><a href={appleUrl}><Download className="w-5 h-5" />Apple Silicon</a></Button>}
          {intelUrl && <Button asChild><a href={intelUrl}><Download className="w-5 h-5" />Intel</a></Button>}
          {!intelUrl && !appleUrl && <Button disabled>Coming Soon</Button>}
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex flex-col items-center justify-center py-24 sm:py-32">
        <div className="text-center mb-8 px-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Download Hedit</h1>
          {isLoading && <p className="mt-3 text-lg text-muted-foreground sm:mt-4">Fetching latest version...</p>}
          {isError && <p className="mt-3 text-lg text-red-500 sm:mt-4">Could not fetch release information. Please try again later.</p>}
          {release && (
            <>
              <p className="mt-3 text-lg text-muted-foreground sm:mt-4">
                Latest Version: {release.tag_name}
              </p>
              {/* <p className="text-sm text-muted-foreground">Total Downloads: {totalDownloads}</p> */}
              <a href={release.html_url} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline mt-2 block">
                View Changelog
              </a>
            </>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full p-4">
          {renderDownloadCard('windows', 'Windows', <Monitor />, getAssetUrl('win'))}
          {renderDownloadCard('macos', 'macOS', <Apple />, getAssetUrl('_x64.dmg'), getAssetUrl('_aarch64.dmg'))}
          {renderDownloadCard('linux', 'Linux', <Terminal />, getAssetUrl('linux'))}
        </div>
        {/* <p className="text-xs text-muted-foreground mt-8">For macOS, please choose the correct version for your processor.</p> */}
      </main>
      <Footer />
    </div>
  );
};

export default DownloadPage;
