const locations = [
    `YES-58TA Vacuum Bake/HMDS Vapor Prime`,
    `YES-CV200 RFS Plasma Strip/Descum System`,
    `Nikon Eclipse L200 Optical Microscope-2`,
    `Nikon Eclipse L200 Optical Microscope-3`,
    `WAFAB Solvent Bench-1`,
    `WAFAB Developer Bench-2`,
    `WAFAB Solvent Bench-2`,
    `Nikon Eclipse L200 Optical Microscope-1`,
    `YES-G1000 Plasma Cleaning System`,
    `Plasma-Therm Versaline Deep Si RIE`,
    `K&S 4129 Wedge Bonder`,
    `Jelight 256 UVO-CLeaner`,
    `Plassys Electron Beam Evaporator`,
    `Questar Q7800 Automatic Wedge Bonder`,
    `EMS 3100 Critical Point Dryer`,
    `XeF2 Etcher`,
    `Fisher Scientific Isotemp FMS Refrigerator`,
    `memsstar ORBIS Alpha Vapor HF/Oxide Etch`,
    `IoN Wave 10 Plasma Asher`,
    `AJA ATC 2200 UHV Sputtering System`,
    `MiniPack Torre MVS-45X Vacuum Sealer`,
    `Solaris 150 RTP Rapid Thermal Annealer`,
    `WAFAB Developer Bench-1`,
    `Angstrom Nexdep Thermal E-Beam Evaporator`,
    `WAFAB Toxic Corrosives Bench-1`,
    `WAFAB HF/TMAN Bench-1`,
    `WAFAB Acid-Base Bench-1`,
    `WAFAB Solvent Cleaning Bench-1`,
    `AJA ATC Orion 8 UHV Sputtering System`,
    `Disco DAD3240 Automatic Dicing Saw`,
    `Ultron UH114 Wafer/Frame Film Applicator`,
    `Ultron UH104 UV Curing System`,
    `Angstrom EvoVac Electron Beam Evaporator`,
    `Filmetrics F3 Film Thickness Reflectometer`,
    `KLA-Tencor P-7 Surface Profilometer`,
    `Bruker Dimension Icon AFM`,
    `Signatone Checkmate CM21X Probe Station`,
    `Savannah G2 Thermal ALD System`,
    `Fiji G2 Plasma Enhanced ALD System`,
    `Plasma-Therm Apex SLR HDPCVD`,
    `Signatone S-1160 Probe Station`,
    `Keysight B1500A Semiconductor Device Analyze`,
    `FMS Thin Film Stress Measurement System`,
    `Plasma-Therm ICP Fluorine Etch II`,
    `Angstrom Nexdep Thermal E-Beam Evaporator II`,
    `FEI Quanta FEG 650 SEM`,
    `Horiba UVISEL2 Spectroscopic Ellipsometer`,
    `Raith EBPG 5000 Plus E-Beam Writer`,
    `SUSS MJB4 Manual Mask Aligner`,
    `3C Technical GCA Autostep 200 Stepper`,
    `WAFAB Resist Spin Bench-2`,
    `WAFAB Resist Spin Bench-1`,
    `Despatch LCC1-15-5 Resist Oven-3`,
    `Despatch LCC1-15-5 Resist Oven-2`,
    `Despatch LCC1-15-5 Resist Oven-1`,
    `Heidelberg I MLA150`,
    `Heidelberg II MLA150 Direct Write Lithographer`,
    `Plasma-Therm ICP Fluorine Etch`,
    `Plasma-Therm ICP Chlorine Etch`,
    `Tystar Mini-Tytan 4600 LPCVD Tube Furnace`,
    `Beamer Computer`];

function LocationList (){
    let listItems = '';
    for(let i = 0; i < locations.length;i++){
        listItems += `<option value="${i}">${i} - `+locations[i]+`</option>`;
      }
    return listItems;
}

const getLocation = (i=0) => locations[i];



export {LocationList,getLocation};