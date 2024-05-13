import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import { toNano } from '@ton/core';
import { DmailNFT } from '../wrappers/DmailNFT';
import '@ton/test-utils';

describe('DmailNFT', () => {
    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let dmailNFT: SandboxContract<DmailNFT>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        dmailNFT = blockchain.openContract(await DmailNFT.fromInit());

        deployer = await blockchain.treasury('deployer');

        const deployResult = await dmailNFT.send(
            deployer.getSender(),
            {
                value: toNano('0.05'),
            },
            {
                $$type: 'Deploy',
                queryId: 0n,
            }
        );

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: dmailNFT.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and dmailNFT are ready to use
    });
});
