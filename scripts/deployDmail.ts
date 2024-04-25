import { toNano } from '@ton/core';
import { Dmail } from '../wrappers/Dmail';
import {NetworkProvider} from '@ton/blueprint';
import {Blockchain, SandboxContract, TreasuryContract} from '@ton/sandbox';

export async function run(provider: NetworkProvider) {
    const dmail = provider.open(await Dmail.fromInit());


    // await dmail.send(
    //     provider.sender(),
    //     {
    //         value: toNano('0.05'),
    //     },
    //     {
    //         $$type: 'Deploy',
    //         queryId: 0n,
    //     }
    // );

    // console.log('dmail.address', dmail.address)
    // await provider.waitForDeploy(dmail.address);


    const a = await dmail.send(
        provider.sender(),
        {value: toNano("0.01")},
        {
            $$type: 'DmailEvent',
            to: "aaaxxxxxx",
            path: "11212asa"
        }
    )
    console.log('完成', a)

    // run methods on `dmail`
}
