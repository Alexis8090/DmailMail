import {Blockchain, SandboxContract, TreasuryContract} from '@ton/sandbox';
import {toNano} from '@ton/core';
import {Dmail} from '../wrappers/Dmail';
import '@ton/test-utils';

describe('Dmail', () => {
    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let dmail: SandboxContract<Dmail>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        dmail = blockchain.openContract(await Dmail.fromInit());

        deployer = await blockchain.treasury('deployer');

        const deployResult = await dmail.send(
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
            to: dmail.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and dmail are ready to use
    });


    it('it aa', async () => {
        const a = await dmail.send(
            deployer.getSender(),
            {value: toNano("0.02")},
            {
                $$type: 'DmailEvent',
                to: "aaa",
                path: "2222"
            }
        )
        console.log('完成',a)
    });
});
