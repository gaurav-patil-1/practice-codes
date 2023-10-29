//1. Default Import
import defaultImport from "../Export/NamedExport";

//Named import
import { name1, name2 } from "../Export/NamedExport";

//Namespace import
import * as tempImport from "../Export/ExportList";

//Alising import
import { name1 as abc, name2 as xyz } from "../Export/NamedExport";

//mixed import
import defaultImport, { name1, name2 } from "../Export/NamedExport";

// importing sideeffects only
import "./myCss";
