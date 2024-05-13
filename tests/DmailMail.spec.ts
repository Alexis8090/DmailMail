import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import { toNano } from '@ton/core';
import { DmailMail } from '../wrappers/DmailMail';
import '@ton/test-utils';

describe('DmailMail', () => {
    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let dmailMail: SandboxContract<DmailMail>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        dmailMail = blockchain.openContract(await DmailMail.fromInit());

        deployer = await blockchain.treasury('deployer');

        const deployResult = await dmailMail.send(
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
            to: dmailMail.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and dmailMail are ready to use
    });
});
