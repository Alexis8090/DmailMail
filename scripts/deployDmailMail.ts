import {Address, Cell, toNano} from '@ton/core';
import {DmailMail, loadDmailMailEvent, loadSendParameters} from '../wrappers/DmailMail';
import {NetworkProvider} from '@ton/blueprint';
import {buffer} from 'stream/consumers';

export async function run(provider: NetworkProvider) {
    // let collection_address = Address.parse("EQCnMYr60vXcUAhM0JslhE28jGYXpT91mAjhhM_I6tTed2QW");
    // const dmailMail = provider.open(await DmailMail.fromAddress(collection_address));

    // const a = await dmailMail.send(
    //     provider.sender(),
    //     {
    //         value: toNano('0.05'),
    //     },
    //     {
    //         $$type: 'DmailMailEvent',
    //         to: "aaavvvcc",
    //         path: "222aaa"
    //     }
    // );
    // console.log('a====', a)




    // let loadEvent = loadDmailMailEvent(Cell.fromBase64("te6cckEBBAEAuwAB4YgBjiug2zu0RSdKG9JtyTg5QL9OWJjjavtB/1fMflopUbwFUXz2U09Y+TJ5D6T3hxgmQxZN187S7VPXZS+hYvYkBF1X1JwBGLGW/TgaPnaOxGqVn0Zm+tWTc+DUftx1Zoc4MU1NGLsx7i3AAAAAiAAcAQJwYgBTmMV9aXruKAQmaE2SwibeRjML0p+6zARwwmfkdWpvO6AX14QAAAAAAAAAAAAAAAAAANNd0L0DAgAIMjIyMgAGYWFhDUyl9A==").asSlice());
    // console.log("ItemId: " + loadEvent);
    // await provider.waitForDeploy(dmailMail.address);

    // run methods on `dmailMail`
}

const main = async () => {
    // await run()
    let loadEvent = loadDmailMailEvent(Cell.fromBase64("te6cckEBAwEAGgACCNNd0L0BAgAQYWFhdnZ2Y2MADDIyMmFhYf+KJSs=").asSlice());
    console.log("content: " + JSON.stringify(loadEvent));

    // te6cckEBBAEAwgAB4YgBjiug2zu0RSdKG9JtyTg5QL9OWJjjavtB/1fMflopUbwE3zwhMc/5VJ6raxc1s4jhAq7hSJN2eYDZ5XbijEAJdRf9uFgQX83EazkQaVIpUDgi8E/byn4vZUOyKqpeyBgASU1NGLsx+T9wAAAAmAAcAQJwYgBTmMV9aXruKAQmaE2SwibeRjML0p+6zARwwmfkdWpvO6AX14QAAAAAAAAAAAAAAAAAANNd0L0DAgAMMjIyYWFhABBhYWF2dnZjY5Y945o=

    // const a1 = "b5ee9c7201010301004e00027062005398c57d697aee280426684d92c226de46330bd29fbacc0470c267e4756a6f3ba017d7840000000000000000000000000000d35dd0bd010200106161617676766363000c323232616161"
    // const b = Buffer.from(a1, 'hex')
    // console.log('Cell.fromBoc(b)[0].asSlice()', Cell.fromBoc(b)[0].asSlice())
    // let loadEvent = loadDmailMailEvent(Cell.fromBoc(b)[0].asSlice());
    // console.log("ItemId: " + JSON.stringify(loadEvent));
    // const base64String = 'te6cckEBAwEAGgACCNNd0L0BAgAQYWFhdnZ2Y2MADDIyMmFhYf+KJSs=';

    // // 第一步：将Base64字符串转换为Buffer对象
    // const buffer = Buffer.from(base64String, 'base64');

    // // 第二步：转换Buffer对象为Hex字符串
    // const hexString = buffer.toString('hex');

    // console.log(hexString);


    // 示例十六进制字符串
    // const hexString = 'b5ee9c7201010301001a000208d35dd0bd010200106161617676766363000c323232616161';

    // 第一步：将十六进制字符串转换为Buffer对象
    // const buffer = Buffer.from(hexString, 'hex');

    // // 第二步：转换Buffer对象为Base64字符串
    // const base64String = buffer.toString('base64');

    // const decimalNumber = parseInt(hexString, 16);

    // console.log(decimalNumber);
}
main()