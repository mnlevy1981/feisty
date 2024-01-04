Search.setIndex({"docnames": ["FOSI-forcing", "api-driver", "api-interface", "api-internal", "api-testcase", "contributing", "driver-example", "generated/feisty.core.ecosystem.benthic_prey_type", "generated/feisty.core.ecosystem.fish_type", "generated/feisty.core.ecosystem.fishing", "generated/feisty.core.ecosystem.food_web", "generated/feisty.core.ecosystem.food_web_link", "generated/feisty.core.ecosystem.reproduction_link", "generated/feisty.core.ecosystem.reproduction_routing", "generated/feisty.core.ecosystem.zooplankton_type", "generated/feisty.core.process.compute_consumption", "generated/feisty.core.process.compute_encounter", "generated/feisty.core.process.compute_energy_avail", "generated/feisty.core.process.compute_fish_catch", "generated/feisty.core.process.compute_growth", "generated/feisty.core.process.compute_ingestion", "generated/feisty.core.process.compute_metabolism", "generated/feisty.core.process.compute_natural_mortality", "generated/feisty.core.process.compute_pred_encounter_consumption_max", "generated/feisty.core.process.compute_predation", "generated/feisty.core.process.compute_rate_T_mass_scaling", "generated/feisty.core.process.compute_recruitment", "generated/feisty.core.process.compute_reproduction", "generated/feisty.core.process.compute_rescale_zoo_consumption", "generated/feisty.core.process.compute_t_frac_pelagic", "generated/feisty.core.process.compute_total_tendency", "generated/feisty.core.process.t_weighted_mean_temp", "generated/feisty.feisty_instance_type", "generated/feisty.feisty_instance_type.compute_tendencies", "generated/feisty.feisty_instance_type.get_prognostic", "generated/feisty.testcase.domain_tanh_shelf", "generated/feisty.testcase.forcing_cyclic", "intro", "matlab-comparison", "references", "scientific-background", "settings", "settings-show-defaults", "testcase-datasets", "usage"], "filenames": ["FOSI-forcing.ipynb", "api-driver.rst", "api-interface.rst", "api-internal.rst", "api-testcase.rst", "contributing.rst", "driver-example.ipynb", "generated/feisty.core.ecosystem.benthic_prey_type.rst", "generated/feisty.core.ecosystem.fish_type.rst", "generated/feisty.core.ecosystem.fishing.rst", "generated/feisty.core.ecosystem.food_web.rst", "generated/feisty.core.ecosystem.food_web_link.rst", "generated/feisty.core.ecosystem.reproduction_link.rst", "generated/feisty.core.ecosystem.reproduction_routing.rst", "generated/feisty.core.ecosystem.zooplankton_type.rst", "generated/feisty.core.process.compute_consumption.rst", "generated/feisty.core.process.compute_encounter.rst", "generated/feisty.core.process.compute_energy_avail.rst", "generated/feisty.core.process.compute_fish_catch.rst", "generated/feisty.core.process.compute_growth.rst", "generated/feisty.core.process.compute_ingestion.rst", "generated/feisty.core.process.compute_metabolism.rst", "generated/feisty.core.process.compute_natural_mortality.rst", "generated/feisty.core.process.compute_pred_encounter_consumption_max.rst", "generated/feisty.core.process.compute_predation.rst", "generated/feisty.core.process.compute_rate_T_mass_scaling.rst", "generated/feisty.core.process.compute_recruitment.rst", "generated/feisty.core.process.compute_reproduction.rst", "generated/feisty.core.process.compute_rescale_zoo_consumption.rst", "generated/feisty.core.process.compute_t_frac_pelagic.rst", "generated/feisty.core.process.compute_total_tendency.rst", "generated/feisty.core.process.t_weighted_mean_temp.rst", "generated/feisty.feisty_instance_type.rst", "generated/feisty.feisty_instance_type.compute_tendencies.rst", "generated/feisty.feisty_instance_type.get_prognostic.rst", "generated/feisty.testcase.domain_tanh_shelf.rst", "generated/feisty.testcase.forcing_cyclic.rst", "intro.md", "matlab-comparison.ipynb", "references.md", "scientific-background.md", "settings.rst", "settings-show-defaults.ipynb", "testcase-datasets.ipynb", "usage.rst"], "titles": ["Generate forcing (does not contain biomass) from CESM output", "FEISTY Driver", "FEISTY Interface", "Internal API", "FEISTY testcase", "Contributing to the FEISTY model", "Running the model", "feisty.core.ecosystem.benthic_prey_type", "feisty.core.ecosystem.fish_type", "feisty.core.ecosystem.fishing", "feisty.core.ecosystem.food_web", "feisty.core.ecosystem.food_web_link", "feisty.core.ecosystem.reproduction_link", "feisty.core.ecosystem.reproduction_routing", "feisty.core.ecosystem.zooplankton_type", "feisty.core.process.compute_consumption", "feisty.core.process.compute_encounter", "feisty.core.process.compute_energy_avail", "feisty.core.process.compute_fish_catch", "feisty.core.process.compute_growth", "feisty.core.process.compute_ingestion", "feisty.core.process.compute_metabolism", "feisty.core.process.compute_natural_mortality", "feisty.core.process.compute_pred_encounter_consumption_max", "feisty.core.process.compute_predation", "feisty.core.process.compute_rate_T_mass_scaling", "feisty.core.process.compute_recruitment", "feisty.core.process.compute_reproduction", "feisty.core.process.compute_rescale_zoo_consumption", "feisty.core.process.compute_t_frac_pelagic", "feisty.core.process.compute_total_tendency", "feisty.core.process.t_weighted_mean_temp", "feisty.feisty_instance_type", "feisty.feisty_instance_type.compute_tendencies", "feisty.feisty_instance_type.get_prognostic", "feisty.testcase.domain_tanh_shelf", "feisty.testcase.forcing_cyclic", "Fisheries Size and Functional Type Model (FEISTY)", "Comparing with <code class=\"docutils literal notranslate\"><span class=\"pre\">matlab</span></code> Baselines", "References", "Scientific Background", "FEISTY Settings", "Default settings", "FEISTY test cases", "Usage"], "terms": {"thi": [0, 1, 2, 3, 4, 5, 8, 32, 37, 38, 41, 43], "notebook": [0, 5, 38], "take": 0, "kristen": 0, "s": [0, 5, 38], "post": 0, "process": [0, 38], "monthli": [0, 38], "time": [0, 6, 16, 29, 30, 31, 32, 33, 36, 38], "seri": 0, "format": [0, 5], "read": [0, 38], "feisti": [0, 3, 6, 38, 42, 44], "note": [0, 36, 38, 43], "both": [0, 38], "baselin": 0, "sever": 0, "grid": [0, 38], "cell": [0, 38], "where": [0, 38], "0": [0, 6, 8, 25, 32, 36, 38, 41, 42, 43], "1e": [0, 32, 38], "300": [0, 38], "small": [0, 5, 38, 41, 42], "valu": [0, 33, 36, 38], "result": [0, 20, 21, 22, 24, 29, 38], "underflow": 0, "i": [0, 8, 11, 26, 36, 43], "suppos": 0, "308": 0, "better": 0, "cut": 0, "off": [0, 5, 38], "still": 0, "realli": [0, 41], "For": [0, 36, 38], "faithfulli": 0, "reproduc": [0, 38], "tini": 0, "matlab": 0, "treat": 0, "them": 0, "when": [0, 5, 41], "comparison": [0, 38], "ipynb": 0, "anyth": 0, "smaller": 0, "than": [0, 38], "threshold": 0, "variabl": [0, 6, 36, 43], "name": [0, 5, 6, 7, 8, 14, 41, 42], "thre": [0, 38], "2": [0, 6, 36, 38, 42, 43], "import": [0, 6, 32, 38, 42, 43, 44], "os": 0, "matplotlib": [0, 6, 38, 43], "pyplot": [0, 6, 38, 43], "plt": [0, 6, 38, 43], "numpi": [0, 38, 43], "np": [0, 38, 43], "scipi": 0, "io": 0, "xarrai": [0, 6, 16, 24, 29, 32, 36, 37, 38, 43], "xr": [0, 38, 43], "common": 0, "paramet": [0, 7, 8, 9, 14, 16, 20, 21, 22, 24, 29, 30, 31, 32, 33, 36, 41], "minimum": [0, 38], "allow": [0, 38], "non": 0, "zero": [0, 38], "helper": 0, "function": [0, 8, 35, 36, 41, 43], "task": 0, "netcdf": [0, 38], "def": 0, "write_netcdf": 0, "ds": 0, "filenam": 0, "path": [0, 5], "isfil": 0, "print": [0, 38, 42], "f": [0, 5, 18, 38], "remov": 0, "befor": [0, 38], "write": 0, "new": [0, 5, 6], "copi": [0, 5], "to_netcdf": 0, "glade": 0, "work": [0, 5], "kristenk": 0, "fish": [0, 6, 8, 18, 19, 21, 22, 29, 30, 32, 33, 37, 39, 41, 42], "offlin": [0, 38, 41], "g": [0, 8, 30, 43], "e11_len": 0, "gecoiaf": 0, "t62_g16": 0, "009": 0, "fiesti": 0, "nc": [0, 38], "cesm_output": 0, "join": 0, "sep": 0, "ds_in": 0, "open_dataset": [0, 38], "decode_tim": 0, "fals": [0, 29, 38, 41, 42], "vert_grid_fil": 0, "p": [0, 39], "cesmdata": 0, "cseg": 0, "releas": 0, "cesm2_0": 0, "compon": [0, 34, 41], "pop": [0, 38], "input_templ": 0, "gx1v7_vert_grid": 0, "spinup_forcing_file_nam": 0, "input_fil": 0, "feisty_input_from_fosi_monthly_1year": 0, "forcing_file_nam": 0, "feisty_input_from_fosi_monthli": 0, "depth": [0, 37, 38, 43], "open": 0, "line": [0, 37, 43], "append": 0, "float": [0, 8, 16], "strip": 0, "split": 0, "1": [0, 6, 30, 36, 38, 41, 42, 43], "column": [0, 38], "ar": [0, 5, 30, 32, 36, 38, 41, 42], "10": [0, 19, 25, 39, 43], "20": [0, 38, 42], "30": [0, 38, 43], "40": [0, 6], "50": [0, 6], "60": 0, "70": [0, 42], "80": [0, 42], "90": 0, "100": [0, 19, 38], "110": 0, "120": 0, "130": 0, "140": 0, "150": 0, "160": 0, "170": 0, "1968": 0, "180": [0, 38], "7613": 0, "191": 0, "8212": 0, "203": 0, "4993": 0, "215": 0, "9234": 0, "229": 0, "2331": 0, "243": 0, "5845": 0, "259": 0, "1558": 0, "276": 0, "1526": 0, "294": 0, "8147": 0, "315": 0, "4237": 0, "338": 0, "3122": 0, "363": [0, 36], "8747": 0, "392": 0, "5804": 0, "424": 0, "9888": 0, "461": 0, "7665": 0, "503": 0, "7068": 0, "551": 0, "7491": 0, "606": 0, "9966": 0, "670": 0, "7286": 0, "744": 0, "398": 0, "829": 0, "6069": 0, "928": 0, "0435": 0, "1041": 0, "3682": 0, "1171": 0, "0402": 0, "1318": 0, "0936": 0, "1482": 0, "9008": 0, "1664": 0, "9921": 0, "1863": 0, "0144": 0, "2074": 0, "874": 0, "2298": 0, "0391": 0, "2529": 0, "9041": 0, "2768": 0, "0986": 0, "3010": 0, "6709": 0, "3256": 0, "1387": 0, "3503": 0, "4487": 0, "3751": 0, "8921": 0, "4001": 0, "0117": 0, "4250": 0, "5244": 0, "4500": 0, "2603": 0, "4750": 0, "1196": 0, "5000": 0, "0464": 0, "5250": 0, "0088": 0, "5499": 0, "9897": 0, "lt": 0, "dataset": [0, 6, 32, 36, 38, 43], "gt": 0, "dimens": [0, 6, 36, 38, 43], "nlat": 0, "384": 0, "nlon": 0, "320": 0, "816": 0, "coordin": [0, 36, 43], "tlong": 0, "float64": [0, 6, 36, 43], "tlat": 0, "9": [0, 6, 38, 42], "092e": 0, "04": [0, 38], "094e": 0, "157e": 0, "05": [0, 6, 32, 38], "without": [0, 5], "data": [0, 5, 6, 7, 9, 10, 12, 13, 14, 33, 36], "kmt": 0, "tarea": 0, "temp_150m": 0, "float32": 0, "diazc_150m": 0, "zooc_150m": 0, "zoo_loss_150m": 0, "diatc_150m": 0, "spc_150m": 0, "temp_bottom": 0, "poc_flux_in_bottom": 0, "attribut": [0, 6, 8, 36, 43], "nsteps_tot": 0, "2263750": 0, "tavg_sum": 0, "2678400": 0, "titl": [0, 38, 43], "start_tim": 0, "wa": [0, 38], "creat": [0, 5], "2015": 0, "07": 0, "15": [0, 6, 38], "00": [0, 38], "58": [0, 6], "12": [0, 6, 38], "7": [0, 42, 43], "histori": 0, "none": [0, 32, 36, 38], "convent": 0, "cf": 0, "http": [0, 5], "www": 0, "cgd": 0, "ucar": 0, "edu": 0, "cm": 0, "eaton": 0, "curr": 0, "sourc": 0, "ccsm": 0, "pop2": 0, "ocean": [0, 38], "cell_method": 0, "mean": [0, 8, 21, 22, 31], "av": 0, "calendar": [0, 38], "all": [0, 5], "year": [0, 38], "have": 0, "exactli": 0, "365": [0, 6, 36, 43], "dai": [0, 18, 36, 38], "tavg_sum_qflux": 0, "content": 0, "diagnost": 0, "prognost": [0, 34, 41], "revis": 0, "id": 0, "tavg": 0, "f90": 0, "41939": 0, "2012": 0, "11": 0, "14": 0, "16": [0, 38], "37": 0, "23z": 0, "mlevi": 0, "datasetdimens": 0, "384nlon": 0, "320time": 0, "816coordin": 0, "3": [0, 36, 38, 42], "degrees_eastlong_nam": 0, "arrai": [0, 24, 29, 33, 34, 43], "t": [0, 5, 8, 25, 38], "longitud": 0, "122880": 0, "dtype": 0, "degrees_northlong_nam": 0, "latitud": 0, "float649": 0, "05unit": 0, "sinc": 0, "0000": 0, "01": [0, 6, 38, 42], "00long_nam": 0, "timecalendar": 0, "noleapbound": 0, "time_boundarrai": 0, "90916": 0, "90944": 0, "90975": 0, "115644": 0, "115674": 0, "115705": 0, "long_nam": [0, 43], "k": [0, 25], "index": [0, 5], "deepest": 0, "centimet": 0, "2long_nam": 0, "area": [0, 16], "z_t": 0, "timegrid_loc": 0, "3111long_nam": 0, "potenti": 0, "temperaturecell_method": 0, "meanunit": 0, "degc": [0, 43], "100270080": 0, "mmol": 0, "m": [0, 5, 37, 39, 43], "cmlong_nam": 0, "thick": 0, "layer": 0, "poc": [0, 36, 43], "flux": [0, 30, 36, 43], "cellcell_method": 0, "2263750tavg_sum": 0, "0titl": 0, "009start_tim": 0, "7histori": 0, "noneconvent": 0, "current": 0, "htmsourc": 0, "componentcell_method": 0, "averag": 0, "over": [0, 38], "interv": 0, "between": 0, "previou": 0, "one": [0, 8], "absent": 0, "given": 0, "0content": 0, "variablesrevis": 0, "time0": 0, "concaten": 0, "249": 0, "time1": 0, "new_tim": 0, "5": [0, 6, 36, 38, 41, 42, 43], "24": 0, "90535": 0, "90565": 0, "90594": 0, "90625": 0, "90655": 0, "90686": 0, "90716": 0, "90747": 0, "90778": 0, "90808": 0, "90839": 0, "90869": 0, "90900": 0, "90930": 0, "90959": 0, "90990": 0, "91020": 0, "91051": 0, "91081": 0, "91112": 0, "91143": 0, "91173": 0, "91204": 0, "91234": 0, "fraction": [0, 16, 29, 31, 41], "larg": [0, 38, 41, 42], "phyto": 0, "frac": 0, "zoo": [0, 6, 36, 41, 42, 43], "fracl": 0, "ep": 0, "lzooc_150m": 0, "lzoo_loss_150m": 0, "some": [0, 5, 43], "meso": 0, "nmolc": 0, "ww": 0, "1e4": 0, "mortal": [0, 19, 22, 28, 33, 38, 41, 43], "d": [0, 19, 30, 43], "about": 0, "long": 0, "disp": 0, "220446049250313e": 0, "replac": 0, "an": [0, 1, 2, 3, 4, 11, 32, 37, 38, 41, 43], "my_reshap": 0, "da": [0, 16], "dim": 0, "return": [0, 29, 32, 34, 36, 43], "els": [0, 38], "biomass_convers": 0, "flux_convers": 0, "mask": 0, "x": [0, 6, 36, 38, 43], "lat": 0, "astyp": 0, "int": 0, "dep": [0, 8], "intermedi": 0, "zooc": [0, 36, 38, 43], "zoo_mort": [0, 28, 36, 38, 43], "scale": [0, 38], "autoc": 0, "come": [0, 40], "diatom": 0, "spc": 0, "diatc": 0, "diazc": 0, "totc": 0, "t_pelag": [0, 31, 36, 43], "t_bottom": [0, 31, 36, 43], "poc_flux_bottom": [0, 36, 38, 43], "cpu": [0, 38], "user": [0, 5, 38], "sy": [0, 38], "88": 0, "total": [0, 30, 38], "wall": [0, 38], "4": [0, 6, 36, 38, 42, 43], "metadata": 0, "dict": [0, 6, 32, 33, 36], "0001": [0, 6, 38], "noleap": 0, "axi": 0, "standard_nam": 0, "degrees_north": 0, "y": 0, "bottom": [0, 31, 39], "z": 0, "pelag": [0, 16, 29, 31, 39, 41], "temperatur": [0, 16, 21, 22, 31, 36, 43], "degre": 0, "c": 0, "particul": 0, "organ": 0, "matter": 0, "seafloor": 0, "mesozooplankton": 0, "loss": [0, 19], "ds_forc": 0, "assign_coord": [0, 38], "attr": 0, "var": [0, 38], "encod": 0, "_fillvalu": 0, "85813": [0, 38], "054e": 0, "056e": 0, "153e": 0, "6": [0, 6, 38], "321": [0, 36], "322": 0, "8": [0, 5, 6, 38], "194": 0, "302": 0, "78": 0, "74": 0, "87": 0, "68": [0, 38], "676": 0, "675": 0, "846": 0, "85": 0, "737": 0, "733": 0, "729": 0, "849": 0, "854": 0, "2883": 0, "2961": 0, "001433": 0, "702": 0, "738": [0, 36, 43], "807": 0, "4748": 0, "7604": 0, "7679": 0, "7748": 0, "00406": 0, "004059xarrai": 0, "85813time": 0, "05long_nam": 0, "timeunit": 0, "00calendar": 0, "noleapaxi": 0, "tarrai": 0, "115263": 0, "115294": 0, "115324": 0, "float64320": 0, "9arrai": 0, "562509": 0, "687509": 0, "812509": 0, "469914": 0, "659942": 0, "858323": 0, "68long_nam": 0, "latitudestandard_nam": 0, "latitudeunit": 0, "degrees_northaxi": 0, "yarrai": 0, "15208992": 0, "87359974": 0, "77653456": 0, "67955939": 0, "float64829": 0, "0long_nam": 0, "depthstandard_nam": 0, "depthunit": 0, "maxi": 0, "zarrai": 0, "85long_nam": 0, "temperatureunit": 0, "carrai": 0, "6762853": 0, "6755391": 0, "6750705": 0, "8295599": 0, "8377023": 0, "8457245": 0, "6469871": 0, "646928": 0, "6465223": 0, "8034658": 0, "8039566": 0, "804067": 0, "677646": 0, "6782286": 0, "6781813": 0, "8099785": 0, "810999": 0, "8111901": 0, "7391715": 0, "738227": 0, "7369074": 0, "399731": 0, "4009069": 0, "404898": 0, "7193749": 0, "7167169": 0, "714111": 0, "8413076": 0, "8511611": 0, "862084": 0, "6973624": 0, "6940153": 0, "6908929": 0, "8391787": 0, "845775": 0, "849752": 0, "854long_nam": 0, "7369847": 0, "733403": 0, "7291213": 0, "8316668": 0, "8403429": 0, "8488038": 0, "7343705": 0, "7312745": 0, "7276651": 0, "8037182": 0, "8042675": 0, "8044078": 0, "7308325": 0, "7282004": 0, "725169": 0, "8108238": 0, "8118666": 0, "8121454": 0, "6188763": 0, "6191071": 0, "6186378": 0, "4021814": 0, "4040368": 0, "4067074": 0, "6132909": 0, "6131761": 0, "6124141": 0, "8448023": 0, "8554877": 0, "8674443": 0, "6102467": 0, "6100825": 0, "6086453": 0, "8422267": 0, "8493931": 0, "8536096": 0, "float320": 0, "001433long_nam": 0, "seafloorunit": 0, "1arrai": 0, "8828746e": 0, "9613757e": 0, "9621306e": 0, "6105724e": 0, "6115820e": 0, "6109915e": 0, "6269054e": 0, "6610518e": 0, "6614746e": 0, "6563296e": 0, "6619680e": 0, "6649286e": 0, "0289702e": 0, "0206011e": 0, "0111364e": 0, "2587210e": 0, "3809236e": 0, "4393732e": 0, "3882658e": 0, "7457155e": 0, "1561459e": 0, "3692071e": 0, "02": [0, 38], "3729831e": 0, "3746414e": 0, "5249030e": 0, "03": [0, 38], "7581507e": 0, "8177130e": 0, "8008100e": 0, "8025139e": 0, "8040985e": 0, "6012949e": 0, "9808744e": 0, "1555511e": 0, "4326100e": 0, "4331030e": 0, "4334931e": 0, "float329": 0, "4748long_nam": 0, "mesozooplanktonunit": 0, "2arrai": 0, "701605": 0, "7382345": 0, "806642": 0, "43828985": 0, "43825188": 0, "43821886": 0, "868257": 0, "902904": 0, "0039425": 0, "46078444": 0, "4607256": 0, "46067247": 0, "852575": 0, "786091": 0, "7655563": 0, "5022994": 0, "5025004": 0, "50253665": 0, "2755516": 0, "2574549": 0, "2354716": 0, "90032256": 0, "9040008": 0, "905367": 0, "0255419": 0, "9907996": 0, "9498423": 0, "6474208": 0, "64728695": 0, "64724785": 0, "7815877": 0, "7545877": 0, "7270881": 0, "4748649": 0, "47482634": 0, "4748102": 0, "004059long_nam": 0, "60381520e": 0, "67901599e": 0, "74763227e": 0, "48503680e": 0, "48400059e": 0, "48250174e": 0, "51505888e": 0, "55885696e": 0, "62053943e": 0, "36555832e": 0, "36907406e": 0, "36295935e": 0, "18357879e": 0, "15485412e": 0, "13550705e": 0, "60281624e": 0, "64647889e": 0, "64590846e": 0, "00000000e": 0, "56255509e": 0, "57984342e": 0, "58585157e": 0, "26585299e": 0, "26478225e": 0, "26384059e": 0, "29419917e": 0, "29384024e": 0, "28726324e": 0, "06162255e": 0, "05984232e": 0, "05855756e": 0, "just": 0, "us": [0, 5, 35, 36, 37, 38, 41, 43, 44], "first": [0, 38], "month": 0, "call": 0, "instead": [0, 38], "0249": [0, 38], "ds_forcing_spinup": 0, "isel": [0, 6, 38, 43], "slice": 0, "248": 0, "45": [0, 6, 42], "105": 0, "288": 0, "319": 0, "349": 0, "817": 0, "818": 0, "2962": 0, "00137": 0, "001371": 0, "4683": 0, "003963": 0, "003963xarrai": 0, "12coordin": 0, "float6415": 0, "5long_nam": 0, "135": 0, "166": 0, "196": 0, "227": 0, "258": 0, "816long_nam": 0, "7570819": 0, "7580512": 0, "7587181": 0, "7207031": 0, "7320296": 0, "7465262": 0, "7530627": 0, "7527065": 0, "7529848": 0, "8334056": 0, "8425745": 0, "8542347": 0, "725241": 0, "7234391": 0, "7222056": 0, "8161112": 0, "8167795": 0, "8163347": 0, "817long_nam": 0, "7642565": 0, "761343": 0, "7583826": 0, "7254934": 0, "7382551": 0, "7537823": 0, "7588273": 0, "7565235": 0, "754467": 0, "8361694": 0, "8460748": 0, "858912": 0, "754208": 0, "752547": 0, "7508115": 0, "8172491": 0, "8179355": 0, "8174808": 0, "001371long_nam": 0, "6802498e": 0, "6490371e": 0, "6302508e": 0, "5367837e": 0, "5469234e": 0, "5547771e": 0, "3273806e": 0, "5922561e": 0, "7401036e": 0, "7094808e": 0, "7137914e": 0, "7159530e": 0, "9296982e": 0, "2184234e": 0, "3217907e": 0, "3689165e": 0, "3699600e": 0, "3706082e": 0, "4683long_nam": 0, "2986151": 0, "30074963": 0, "30191126": 0, "9845928": 0, "98466176": 0, "98388666": 0, "30994225": 0, "3113521": 0, "3147912": 0, "64590645": 0, "64599246": 0, "64608306": 0, "0501752": 0, "070855": 0, "1177113": 0, "46832138": 0, "46831194": 0, "46832347": 0, "003963long_nam": 0, "6038152e": 0, "6790160e": 0, "7476323e": 0, "4850368e": 0, "4840006e": 0, "4825017e": 0, "5150589e": 0, "5588570e": 0, "6205394e": 0, "3655583e": 0, "3690741e": 0, "3629593e": 0, "1835788e": 0, "1548541e": 0, "1355070e": 0, "6028162e": 0, "6464789e": 0, "6459085e": 0, "0000000e": 0, "7986882e": 0, "7982550e": 0, "7932765e": 0, "2564690e": 0, "2561447e": 0, "2553709e": 0, "7601882e": 0, "7596801e": 0, "7630517e": 0, "9608721e": 0, "9625051e": 0, "9632749e": 0, "ds_read_forc": 0, "301": 0, "ms": [0, 38], "object": [0, 6, 20, 21, 22, 24, 29, 30, 32, 43], "object0001": 0, "timeaxi": 0, "cftime": 0, "datetimenoleap": 0, "has_year_zero": 0, "true": [0, 29, 38, 42], "15209": 0, "8736": 0, "776535": 0, "679559": 0, "1029756": 0, "probabl": 0, "should": [0, 5], "directli": [0, 5], "well": [0, 38], "now": [0, 5], "ic": 0, "page": [1, 2, 3, 4, 41], "provid": [1, 2, 3, 4, 37, 38, 41, 43], "auto": [1, 2, 3, 4], "gener": [1, 2, 3, 4, 5, 6, 36, 38, 43], "summari": [1, 2, 3, 4], "offline_driv": 1, "api": [2, 4], "highli": 5, "welcom": 5, "appreci": 5, "The": [5, 8, 21, 22, 36, 37, 41, 43], "follow": [5, 8, 32], "section": [5, 41], "cover": 5, "guidelin": 5, "regard": 5, "maintain": 5, "contributor": 5, "noth": 5, "here": [5, 41, 42, 43], "set": [5, 32, 36], "stone": 5, "can": [5, 32, 38], "chang": [5, 38], "feel": 5, "free": 5, "suggest": 5, "improv": 5, "workflow": 5, "best": 5, "approach": 5, "code": [5, 38], "fork": 5, "repositori": 5, "clone": 5, "your": 5, "local": 5, "appli": [5, 38, 41], "edit": 5, "push": 5, "back": 5, "submit": 5, "pull": [5, 38], "github": 5, "detail": 5, "instruct": 5, "describ": [5, 11], "step": [5, 6, 32, 38], "It": 5, "fine": 5, "becaus": 5, "live": 5, "under": 5, "git": 5, "branch": 5, "com": 5, "your_github_usernam": 5, "cd": 5, "consid": 5, "own": 5, "main": 5, "checkout": 5, "b": [5, 25, 43], "bugfix": 5, "instal": 5, "pre": 5, "commit": 5, "its": [5, 37, 38], "hook": 5, "repo": 5, "pip": 5, "afterward": 5, "run": [5, 41], "whenev": 5, "you": 5, "framework": 5, "manag": 5, "multi": 5, "languag": 5, "ensur": [5, 38], "style": 5, "consist": 5, "depend": 5, "conda": 5, "environ": 5, "env": 5, "updat": 5, "ci": 5, "yml": 5, "test": [5, 36, 38], "simpl": [5, 38], "issu": 5, "command": 5, "activ": [5, 38], "sandbox": 5, "devel": 5, "pytest": 5, "junitxml": 5, "report": 5, "junit": 5, "xml": 5, "cov": 5, "verbos": 5, "via": [5, 32], "tool": 5, "against": 5, "latest": 5, "python": [5, 37, 38], "version": 5, "again": 5, "necessari": 5, "pleas": 5, "pep": 5, "re": 5, "file": [5, 38], "onc": 5, "pass": 5, "happi": 5, "messag": 5, "u": 5, "final": [5, 38], "through": [5, 38], "websit": 5, "head": 5, "compar": 5, "base": 5, "ncar": 5, "master": 5, "critic": 5, "enabl": [5, 41], "robust": 5, "usabl": 5, "doc": 5, "directori": 5, "built": 5, "jupyt": 5, "book": 5, "util": [5, 38], "myst": 5, "markdown": 5, "restructuredtext": 5, "layout": 5, "express": 5, "_toc": 5, "automat": 5, "action": 5, "web": [5, 20, 24, 29, 41], "interfac": [5, 32, 37], "conveni": 5, "fix": 5, "build": [5, 41], "avail": [5, 17, 19, 27, 41], "_build": 5, "view": 5, "browser": 5, "html": 5, "bug": 5, "question": 5, "tracker": 5, "setup": [6, 38], "integr": [6, 38], "load_ext": [6, 38, 43], "autoreload": [6, 38, 43], "settings_in": [6, 38], "benthic_prei": [6, 38, 41, 42], "default": [6, 36, 38], "benthic_effici": [6, 42], "075": [6, 42], "carrying_capac": [6, 42], "member": [6, 42], "food_web": [6, 11, 15, 16, 20, 24, 28, 29, 30, 41, 42], "predat": [6, 19, 23, 24, 41, 42], "sf": [6, 38, 41, 42], "prei": [6, 7, 16, 32, 33, 37, 41, 42], "prefer": [6, 41, 42], "sp": [6, 38, 42], "sd": [6, 38, 42], "mf": [6, 38, 42], "mp": [6, 38, 42], "md": [6, 38, 42], "lp": [6, 38, 42], "ld": [6, 38, 42], "375": [6, 42], "75": [6, 42], "ds_out": [6, 38], "config_and_run_testcas": [6, 38], "tanh_shelf": [6, 38], "cyclic": [6, 36, 38, 43], "start_dat": [6, 38], "end_dat": [6, 38], "0002": [6, 38], "31": [6, 38, 43], "diagnostic_nam": [6, 38], "t_habitat": [6, 15, 16, 21, 22, 23], "ingestion_r": [6, 17, 20], "predation_flux": [6, 24, 30], "predation_r": [6, 19], "metabolism_r": [6, 17, 21], "mortality_r": [6, 19, 22, 30], "energy_avail_r": [6, 17, 19, 27, 30], "growth_rat": [6, 19, 26, 27, 30, 38], "reproduction_r": [6, 26, 27, 30], "recruitment_flux": [6, 26, 30], "fish_catch_r": [6, 18, 19, 30], "encounter_rate_link": [6, 15, 16], "encounter_rate_tot": [6, 15, 16], "consumption_rate_max_pr": [6, 15, 23], "consumption_rate_link": [6, 15, 20, 24, 28, 30], "start": [6, 38], "templat": [6, 38], "32": 6, "39": 6, "730": [6, 38], "timestep": 6, "finish": [6, 38], "_solv": [6, 38], "info": [6, 43], "22": [6, 35, 36, 43], "group": [6, 8, 38, 41], "feeding_link": 6, "19": [6, 38, 39], "u12": 6, "biomass": [6, 16, 24, 26, 28, 29, 30, 32, 33, 34, 36, 37, 38, 41, 43], "u2": 6, "u15": 6, "global": [6, 39, 43], "test_d": 6, "sel": [6, 38], "plot": [6, 38, 43], "linewidth": 6, "ylim": [6, 38], "4e": 6, "yscale": 6, "log": [6, 38], "legend": [6, 38, 43], "bbox_to_anchor": [6, 38], "class": [7, 8, 9, 10, 11, 12, 13, 14, 32, 37, 38, 41], "group_ind": [7, 8, 14], "mod_param": [7, 8, 10, 14], "kwarg": [7, 8, 14], "structur": [7, 9, 10, 12, 13, 14, 37, 41], "contain": [7, 9, 14, 32, 36], "benthic": [7, 32, 33, 38, 41], "__init__": [7, 8, 9, 10, 11, 12, 13, 14, 32], "method": [7, 8, 9, 10, 11, 12, 13, 14, 32], "domain_param": [8, 9, 29], "size_class": [8, 41, 42], "functional_typ": [8, 41, 42], "t_frac_pelagic_stat": [8, 29, 41, 42], "pelagic_demersal_coupl": [8, 41, 42], "harvest_select": [8, 41, 42], "energy_frac_somatic_growth": [8, 41, 42], "paramter": 8, "type": [8, 36, 41], "string": 8, "e": [8, 26, 36], "forag": [8, 39, 41, 42], "piscivor": [8, 42], "demers": [8, 39, 41, 42], "mass": [8, 25, 30], "individu": [8, 11], "geometr": 8, "kt": 8, "coeff": 8, "met": 8, "fn": 8, "orig": 8, "063": [8, 42], "0855": [8, 42], "amet": 8, "metabol": [8, 21], "bpow": 8, "power": 8, "metab": 8, "fishing_rate_per_year": [9, 41, 42], "feeding_set": 10, "member_obj_list": [10, 30], "defin": [10, 41], "feed": [10, 11, 37], "relationship": [10, 41], "inform": [11, 12, 13, 32, 33], "link": [11, 12, 38], "ndx_from": 12, "i_fish_from": 12, "i_fish": 12, "is_larv": [12, 42], "effici": [12, 42], "pertain": 12, "specif": [12, 30], "reproduct": [12, 13, 26, 27, 38, 41], "rout": [12, 13, 41], "list": [12, 21, 22, 29, 30, 36, 41], "routing_set": 13, "fish_list": [13, 17, 18, 19, 21, 22, 23, 27, 29], "all_group": 13, "store": [13, 20, 21, 22, 24, 29], "zooplankton": [14, 28, 33, 36, 37, 38, 41, 42, 43], "consumpt": [15, 23, 28], "rate": [15, 16, 18, 19, 21, 23, 30, 41], "encounter_rate_pr": [16, 23], "t_frac_pelag": [16, 29, 31], "ecosys_param": [16, 29], "comput": [16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 27, 29, 30, 31, 32, 33, 35, 38, 41], "encount": [16, 23], "dataarrai": [16, 20, 21, 22, 24, 29, 43], "fill": 16, "biomass_prei": 16, "densiti": 16, "array_lik": [16, 20, 21, 22, 24, 29, 30, 32, 33], "experienc": [16, 21, 22], "spent": [16, 29, 31], "t_frac_prei": 16, "item": 16, "energi": [17, 19, 27, 41], "growth": [17, 19, 26, 27, 41], "nu": [17, 27], "fishing_r": 18, "per": 18, "selec": [18, 19], "fisheri": 18, "select": [18, 19, 38], "somat": [19, 27], "gamma": [19, 27], "nmort": 19, "natur": [19, 22], "frate": 19, "harvest": [19, 41], "adult": 19, "juvenil": 19, "ingest": [20, 41], "food": [20, 24, 29, 41], "ecosystem": [21, 22, 29, 30], "numer": [21, 22, 31, 32], "weight": [21, 22, 31, 41], "mortality_typ": [22, 42], "maximum": 23, "predation_zoo_flux": 24, "t0": 25, "reproduction_rout": [26, 41, 42], "recruit": 26, "from": [26, 27, 32, 37, 38, 42], "larval": 26, "product": 26, "consumption_zoo_frac_mort": 28, "consumption_zoo_sc": 28, "consumption_zoo_raw": 28, "limit": 28, "term": [28, 41], "pelagic_functional_typ": 29, "demersal_functional_typ": 29, "pi_be_cutoff": 29, "reset": 29, "boolean": [29, 41], "option": [29, 32, 38], "If": [29, 36], "total_tend": 30, "poc_flux": 30, "first_fish_id": 30, "tendenc": [30, 32, 33], "input": [30, 37], "_rate": 30, "suffix": 30, "_flux": 30, "actual": 30, "domain_dict": [32, 36, 43], "settings_dict": 32, "fish_ic_data": 32, "benthic_prey_ic_data": 32, "002": 32, "biomass_init_fil": 32, "biomass_slic": 32, "primari": 32, "model": [32, 33, 36, 41, 43], "dictionari": [32, 36, 41], "domain": [32, 36, 43], "exampl": [32, 36, 41, 43], "nx": [32, 35, 43], "len": [32, 38], "bathymetry_data": 32, "bathymetri": [32, 35], "initi": [32, 38], "condit": [32, 38], "get_model_domain": 32, "feisty_inst": 32, "In": 32, "context": 32, "forward": 32, "dxdt": 32, "compute_tend": 32, "Then": 32, "access": 32, "tendency_data": 32, "properti": 32, "ds_t": 32, "fish_biomass": 33, "benthic_prey_biomass": 33, "zooplankton_biomass": 33, "zoo_mortality_data": 33, "gcm_state_update_kwarg": 33, "forc": [33, 36, 38, 41], "cap": [33, 41], "keyword": 33, "pair": 33, "gcm": 33, "state": 33, "ideal": [35, 36, 38], "analyt": [35, 38], "tanh": 35, "nt": 36, "zoo_spec": 36, "case": [36, 38], "harmon": [36, 43], "season": 36, "vari": 36, "integ": 36, "number": 36, "specifi": [36, 41], "zoo_nam": 36, "zoo1": 36, "zoo2": 36, "mu": [36, 43], "amp_fract": [36, 43], "phase": [36, 43], "361": 36, "362": 36, "364": 36, "2381": [36, 43], "02381": [36, 43], "2857": [36, 43], "476": [36, 43], "u3": [36, 43], "18": [36, 38], "02785": 36, "02775": 36, "002347": 36, "002346": 36, "329": 36, "7756": 36, "7722": 36, "mechanist": 37, "includ": [37, 41, 43], "multipl": 37, "petrik": [37, 39], "et": 37, "al": 37, "2019": [37, 39], "introduc": 37, "underli": 37, "parameter": [37, 41], "packag": 37, "other": 37, "show": 37, "two": 37, "three": [37, 38], "habitat": 37, "categori": 37, "interact": 37, "arrow": 37, "dash": 37, "denot": 37, "onli": 37, "occur": 37, "shelf": 37, "region": 37, "200": [37, 42], "dot": 37, "surround": 37, "esm": 37, "taken": 37, "port": 38, "script": 38, "ad": 38, "featur": 38, "we": [38, 43], "varieti": 38, "simul": [38, 41], "answer": 38, "close": 38, "typic": 38, "within": 38, "round": 38, "solut": 38, "ran": 38, "field": [38, 41, 43], "matlab_script": 38, "test_cas": 38, "next": 38, "locat": 38, "test_locs3": 38, "cesm": 38, "fosi": 38, "exact": 38, "fosi_cesm_daili": 38, "after": 38, "verifi": 38, "could": 38, "daili": 38, "abil": 38, "interpol": 38, "also": 38, "modifi": 38, "how": [38, 41], "done": 38, "kept": 38, "date": 38, "rather": 38, "assum": 38, "output": 38, "evenli": 38, "space": 38, "apart": 38, "each": 38, "floor": 38, "do": [38, 41], "extrapol": 38, "prior": 38, "level": 38, "last": 38, "respect": 38, "due": 38, "fosi_cesm": 38, "similarli": 38, "fosi_cesm_spinup": 38, "abov": [38, 41], "so": 38, "match": 38, "yaml": [38, 42], "distribut": 38, "client": 38, "dask_jobqueu": 38, "pbscluster": 38, "compare_nc": 38, "default_config": 38, "old_set": 38, "There": 38, "few": 38, "testcas": [38, 43], "were": 38, "larger": 38, "quick": 38, "fosi_spinup": 38, "cycl": [38, 43], "purpos": 38, "equilibri": 38, "full": 38, "evolv": 38, "gx1v7": 38, "driver": [38, 39], "driver_config": 38, "differ": 38, "ignore_year_in_forc": 38, "make_err_plot": 38, "plot_set": 38, "max_output_time_dim": 38, "0251": 38, "0100": 38, "matlab_script_loc": 38, "num_chunk": 38, "baseline_compar": 38, "compare_forc": 38, "55000": 38, "look": [38, 43], "good": 38, "15633": 38, "error": 38, "11677": 38, "medium": [38, 41, 42], "76989": 38, "baselines_from_nc": 38, "matlab_baselin": 38, "neg": 38, "force_nonneg": 38, "rais": 38, "valueerror": 38, "unknown": 38, "ncore": 38, "36": [38, 43], "config": 38, "dashboard": 38, "proxi": 38, "statu": 38, "comm": 38, "timeout": 38, "tcp": 38, "connect": 38, "memori": 38, "gb": 38, "core": 38, "queue": 38, "casper": 38, "walltim": 38, "resource_spec": 38, "ncpu": 38, "mem": 38, "300gb": 38, "config_and_run_from_netcdf": 38, "09": 38, "56": 38, "35": 38, "195": 38, "rel": 38, "err": 38, "280": 38, "0534e": 38, "2193e": 38, "9989e": 38, "06": 38, "0000e": 38, "08": 38, "202": 38, "7526e": 38, "9355e": 38, "1794e": 38, "2427e": 38, "4277e": 38, "7971e": 38, "5650e": 38, "1649e": 38, "9276e": 38, "5526e": 38, "0739e": 38, "6337e": 38, "3466e": 38, "9905e": 38, "make_plot": 38, "isel_dict": 38, "rang": [38, 43], "baselines_tmp": 38, "fig": [38, 43], "ax": [38, 43], "subplot": [38, 43], "figsiz": 38, "set_ylim": 38, "set_yscal": 38, "set_titl": 38, "set_ylabel": 38, "set_yticklabel": 38, "025": 38, "loc": 38, "suptitl": 38, "da1": 38, "da2": 38, "ab": 38, "absolut": 38, "fig_suptitl": 38, "reduc": 38, "9997e": 38, "0285e": 38, "6472e": 38, "0541e": 38, "6491e": 38, "0464e": 38, "8092e": 38, "9298e": 38, "2578e": 38, "5915e": 38, "13": 38, "8330e": 38, "6302e": 38, "psa": 39, "colleen": 39, "charl": 39, "A": 39, "stock": 39, "ken": 39, "h": 39, "andersen": 39, "dani\u00ebl": 39, "van": 39, "denderen": 39, "jame": 39, "r": 39, "watson": 39, "up": 39, "pattern": 39, "progress": 39, "oceanographi": 39, "176": 39, "102124": 39, "doi": 39, "1016": 39, "j": 39, "pocean": 39, "soon": 40, "descript": 41, "configur": 41, "lofflin": [41, 42], "mode": 41, "model_set": [41, 42], "aspect": 41, "size": 41, "size_class_bound": [41, 42], "bound": 41, "gram": 41, "001": [41, 42], "250": [41, 42], "125000": [41, 42], "functional_type_kei": [41, 42], "pelagic_demersal_coupling_type_kei": [41, 42], "engag": 41, "coupl": 41, "below": 41, "zooplankton_functional_type_kei": [41, 42], "pelagic_functional_type_kei": [41, 42], "inhabit": 41, "zone": 41, "demersal_functional_type_kei": [41, 42], "pelagic_demersal_coupling_apply_pref_type_kei": [41, 42], "sum": 41, "benthic_pelagic_depth_cutoff": [41, 42], "cutoff": 41, "meter": 41, "must": 41, "doe": 41, "proport": 41, "subject": 41, "entri": 41, "among": 41, "constitu": 41, "get_default": 42, "dump": 42, "default_flow_styl": 42, "sort_kei": 42, "k_metabol": 42, "a_metabol": 42, "b_metabol": 42, "175": 42, "k_encount": 42, "a_encount": 42, "b_encount": 42, "k_consumpt": 42, "a_consumpt": 42, "b_consumpt": 42, "25": 42, "constant": 42, "mortality_coeff_per_yr": 42, "assim_effici": 42, "modul": 43, "utilit": 43, "hand": 43, "illustr": 43, "utilti": 43, "domain_tanh_shelf": 43, "04108171": 43, "19902725": 43, "17873201": 43, "8321355": 43, "61": 43, "34734988": 43, "131": 43, "85502453": 43, "264": 43, "42098685": 43, "437": 43, "55383604": 43, "609": 43, "22301965": 43, "749": 43, "85055796": 43, "851": 43, "52743149": 43, "919": 43, "48569869": 43, "962": 43, "76570279": 43, "989": 43, "53462509": 43, "1005": 43, "8032774": 43, "1015": 43, "58739719": 43, "1021": 43, "43508524": 43, "1024": 43, "91716307": 43, "1026": 43, "98605941": 43, "1028": 43, "21370613": 43, "94160815": 43, "1029": 43, "37300191": 43, "214": 43, "unit": 43, "marker": 43, "o": 43, "gca": 43, "invert_yaxi": 43, "text": 43, "subpackag": 43, "repres": 43, "annual": 43, "forcing_cycl": 43, "forcing_tim": 43, "harmonic_parm": 43, "quadrat": 43, "like": 43, "nrow": 43, "collect": 43, "quadmesh": 43, "0x7f2b92bd5d50": 43, "Or": 43, "singl": 43, "point": 43, "label": 43, "0x7f2b95d98250": 43, "shape": 43, "figur": 43, "line2d": 43, "0x7f2b8a9f5d90": 43, "To": 44, "project": 44}, "objects": {"feisty.core.ecosystem": [[7, 0, 1, "", "benthic_prey_type"], [8, 0, 1, "", "fish_type"], [9, 0, 1, "", "fishing"], [10, 0, 1, "", "food_web"], [11, 0, 1, "", "food_web_link"], [12, 0, 1, "", "reproduction_link"], [13, 0, 1, "", "reproduction_routing"], [14, 0, 1, "", "zooplankton_type"]], "feisty.core.ecosystem.benthic_prey_type": [[7, 1, 1, "", "__init__"]], "feisty.core.ecosystem.fish_type": [[8, 1, 1, "", "__init__"]], "feisty.core.ecosystem.fishing": [[9, 1, 1, "", "__init__"]], "feisty.core.ecosystem.food_web": [[10, 1, 1, "", "__init__"]], "feisty.core.ecosystem.food_web_link": [[11, 1, 1, "", "__init__"]], "feisty.core.ecosystem.reproduction_link": [[12, 1, 1, "", "__init__"]], "feisty.core.ecosystem.reproduction_routing": [[13, 1, 1, "", "__init__"]], "feisty.core.ecosystem.zooplankton_type": [[14, 1, 1, "", "__init__"]], "feisty.core.process": [[15, 2, 1, "", "compute_consumption"], [16, 2, 1, "", "compute_encounter"], [17, 2, 1, "", "compute_energy_avail"], [18, 2, 1, "", "compute_fish_catch"], [19, 2, 1, "", "compute_growth"], [20, 2, 1, "", "compute_ingestion"], [21, 2, 1, "", "compute_metabolism"], [22, 2, 1, "", "compute_natural_mortality"], [23, 2, 1, "", "compute_pred_encounter_consumption_max"], [24, 2, 1, "", "compute_predation"], [25, 2, 1, "", "compute_rate_T_mass_scaling"], [26, 2, 1, "", "compute_recruitment"], [27, 2, 1, "", "compute_reproduction"], [28, 2, 1, "", "compute_rescale_zoo_consumption"], [29, 2, 1, "", "compute_t_frac_pelagic"], [30, 2, 1, "", "compute_total_tendency"], [31, 2, 1, "", "t_weighted_mean_temp"]], "feisty": [[32, 0, 1, "", "feisty_instance_type"]], "feisty.feisty_instance_type": [[32, 1, 1, "", "__init__"], [33, 1, 1, "", "compute_tendencies"], [34, 1, 1, "", "get_prognostic"]], "feisty.testcase": [[35, 2, 1, "", "domain_tanh_shelf"], [36, 2, 1, "", "forcing_cyclic"]]}, "objtypes": {"0": "py:class", "1": "py:method", "2": "py:function"}, "objnames": {"0": ["py", "class", "Python class"], "1": ["py", "method", "Python method"], "2": ["py", "function", "Python function"]}, "titleterms": {"gener": 0, "forc": [0, 43], "doe": 0, "contain": 0, "biomass": 0, "from": 0, "cesm": 0, "output": [0, 6], "reshap": 0, "drop": 0, "land": 0, "do": 0, "unit": 0, "convers": 0, "also": 0, "spinup": 0, "get": 0, "initi": 0, "condit": 0, "out": 0, "mat": 0, "file": 0, "feisti": [1, 2, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 41, 43], "driver": 1, "api": [1, 3], "interfac": 2, "primari": 2, "object": 2, "intern": 3, "model": [3, 5, 6, 37, 38], "compon": 3, "process": [3, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], "testcas": [4, 6, 35, 36], "util": 4, "contribut": 5, "develop": 5, "write": 5, "document": 5, "featur": 5, "request": 5, "feedback": 5, "run": [6, 38], "configur": [6, 38], "core": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], "ecosystem": [7, 8, 9, 10, 11, 12, 13, 14], "benthic_prey_typ": 7, "fish_typ": 8, "fish": 9, "food_web": 10, "food_web_link": 11, "reproduction_link": 12, "reproduction_rout": 13, "zooplankton_typ": 14, "compute_consumpt": 15, "compute_encount": 16, "compute_energy_avail": 17, "compute_fish_catch": 18, "compute_growth": 19, "compute_ingest": 20, "compute_metabol": 21, "compute_natural_mort": 22, "compute_pred_encounter_consumption_max": 23, "compute_pred": 24, "compute_rate_t_mass_sc": 25, "compute_recruit": 26, "compute_reproduct": 27, "compute_rescale_zoo_consumpt": 28, "compute_t_frac_pelag": 29, "compute_total_tend": 30, "t_weighted_mean_temp": 31, "feisty_instance_typ": [32, 33, 34], "compute_tend": 33, "get_prognost": 34, "domain_tanh_shelf": 35, "forcing_cycl": 36, "fisheri": 37, "size": 37, "function": 37, "type": 37, "compar": 38, "matlab": 38, "baselin": 38, "addit": 38, "improv": 38, "set": [38, 41, 42], "up": 38, "dask": 38, "cluster": 38, "chunk": 38, "data": [38, 43], "refer": 39, "scientif": 40, "background": 40, "default": 42, "test": 43, "case": 43, "ideal": 43, "bathymetri": 43, "visual": 43, "usag": 44}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})