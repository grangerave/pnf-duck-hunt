import bcrypt from 'bcryptjs/dist/bcrypt.js';

const locKeys = [
    `$2a$04$38EPTIHecFFSUQ8mF74t2.z6sRKc/GzPq0xNkFIYDESrWJZQqzDX2`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.ndDc2Wjl76Y0cc79jM2ZOOufOp4Tw2.`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.GSjo/y.mLuqZ2F8q84K260HZbr4B00e`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.y2SFot8OZVXWVMXayzImqh.1TTIKP0W`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.lQ0U1lS534gMZTAoiNdg4VNxYal4yXm`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.0/A4TINmXQFrdEiO3vga75uLMjLZ6c.`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.xvfqxsl.tOsyGgd.sa8HNyJMZmUCSO.`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.to6GSMxjVivXC2cgt2nJiu9Ov3Zqvxe`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.TvUHeJlI90Q5IymH8XVKXqvXP3GgdpG`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.FGO1F/Zs/1MSbK67ZhqBCK9xBViX8q6`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.z4JIvkZIIr2U667VM7ZMspDECaGTVI.`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.G33AchWimmwPFGk7Co0BCQ7bpJvab1.`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.LHDxLN5XVpYIh5mY6rnM/wgeF/2oQeG`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.7HeKmtoSdsfy/jZGJC3RW9N9kkoA9DO`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.s7obfD9vi3cdLOkl2fmkOhUhYgp369C`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.Qk2fvINyswFU0CYsRNwbBHR/A/DyJ2i`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.Zn56WuIkvDvq1IUc3UM2lxVfkbdF6.W`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.0Yrj3yK2IidKo2FgEIkdkoEMxDhtU5S`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.c/23n.EhEmB6xQz9rUFtb35d/pxDuCK`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.GnpZhB7xGcoWcXkmXW2rACjkL/FxGQa`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.KawWLvtslpZ0yvRatmDuOjHd/xyKj0q`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.StTye3uPzoMLMDbEXQnMSflqI2r3iES`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.qnyjF22fU49QdwKSLzK00KoBcb8i7ZO`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.gczY8dSYazwC892LG8gLLZVhMJi8.mW`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.RjvnGxXunLlN3WCqTs5AqrPBoCmSlmC`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.FzGtluWRaUNJGB.dcJvDhsYQFfZlVRS`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.GVma74MfsVN8juFdW.YQqOyfP6wuZLW`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.XCa2yEisavhY4BIWneQ5wnFSt3kgFLG`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.yhmUWS6Ki5fKM2siPt4F8CLPrIi/jBW`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.c7/vLg8iCZ9qYcwHgw.UoWctnGwBREO`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.Rw9X8T6oH0f5pqpSUNti/nD70KNDrAu`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.ccd47tZdX8c2P5bq5mD9XO3bsRbEeCe`,
];

const roomKeys = [
    `$2a$04$38EPTIHecFFSUQ8mF74t2.j01JAXMht2SOa9tTnWr3U3Ya.NxDb4y`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.X5Q6oUm.cuCf0B44i5m3LuKrR.WfvtO`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.9Dy/EfatUSsMKehE8naksTykfpovCTa`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.1XvBp.Kugvr90hZ63XZJhJNriHR9w3.`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.p3Bj3WQy7tvIFdTklgkf1rufcY5oF2e`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.J3CmTmWtC/nBpdX4jYLWmsQ/cMFwkUG`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.fyIWE8ke0BW6hGvthdV1oWVuBvJ8OnO`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.7ie73Gdd4BtV/YUkcReiVhwrN1i4Yym`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.e/p/3xJOKUn99JXsIe4gl9xU5EWkAHa`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.YXI/BtbIE7JkyLz4vUZeUa1z64ExRaq`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.YEXpYpvQI6ORcrRySgPEk26Zsnc0ZTe`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.KFIal6QxEqKAnXo3fABDQqRDij5.O7e`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.iaGDPRx9BcAmDqS1Q1mNlec8OtSf9x2`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.pNXkZqKjLSMgvVaAWeOV0aENUdXwiRm`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.xik3mp0yqnYPF9WYNajdsTeoTDwuvhi`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.vDKYHSzR6JsthnezpFc.VWbiHWHWBiK`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.dQaOepJ/.yG2.KLx3j1piksWua10Plq`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.2sP2TpFIWO.vemPoNp7PFbYZ8gP84CO`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.Rf0urqR4Tk6f7bTFD418DUvZJmYkDvu`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.bwU39s9FpiiptUslt0WZUJ19HXecv/u`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.zsX71YW04xgOErdFb0hQKHRlrAJm/Wu`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.KsMHJLSeeV1g8AMvF6ujjqx3vqLr4Pi`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.nAEgoKRuMEvwtMO7EXiBSAuwKe8w4Sm`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.7fzYlioM9eul73vaDZZsgoEJtILmKry`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.F.yr6gXbBLd4mbRieLslS60IHWmbGaG`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.VF79lJuVqJlV7EjBUQm/jUQbha/heG2`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.nUgFPvfVefQxRjfmfxyJCuH5wS3/Xce`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.jj2e6njfqoGDYXycDCWb9kPzix9Yrv2`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2./SjOSDgPApixAPDOeoKd2EqjqHKIlpq`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.o7Ef748wwHc9wOFE4OpKkeCtRYyR7Qm`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.Jf58OviMe6h5RTGvJiXRCkrZjpDaJp2`,
    `$2a$04$38EPTIHecFFSUQ8mF74t2.9hZLX8BSJVme1/EY7hcBqHj5RWfxmo6`
];

//const mySalt = bcrypt.genSaltSync(4);
const mySalt = `$2a$04$38EPTIHecFFSUQ8mF74t2.`

const hashLoc = (duc,loc) => {
    if(loc<=0){
        return 0;
    }
    console.log(`duc`+duc+`loc`+loc + bcrypt.compareSync(`duc`+duc+`loc`+loc, locKeys[duc]));
    return (bcrypt.compareSync(`duc`+duc+`loc`+loc, locKeys[duc])) ? 1 : 0
    console.log(`duc`+duc+`loc`+loc);
    //console.log(bcrypt.hashSync(`duc`+duc+`loc`+loc,mySalt));
    return 0;
};

const hashRoom = (duc,room) => {
    if(room<=0){
        return 0;
    }
    console.log(`duc`+duc+`room`+room + bcrypt.compareSync(`duc`+duc+`room`+room, roomKeys[duc]));
    return (bcrypt.compareSync(`duc`+duc+`room`+room, roomKeys[duc])) ? 1 : 0
    console.log(`duc`+duc+`room`+room);
    console.log(bcrypt.hashSync(`duc`+duc+`room`+room,mySalt));
    return 0;
};

export {hashLoc,hashRoom};