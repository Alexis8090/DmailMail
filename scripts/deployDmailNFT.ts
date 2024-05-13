import { toNano } from '@ton/core';
import { DmailNFT } from '../wrappers/DmailNFT';
import { NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const dmailNFT = provider.open(await DmailNFT.fromInit());

    await dmailNFT.send(
        provider.sender(),
        {
            value: toNano('0.05'),
        },
        {
            $$type: 'Deploy',
            queryId: 0n,
        }
    );

    await provider.waitForDeploy(dmailNFT.address);

    // run methods on `dmailNFT`
}
