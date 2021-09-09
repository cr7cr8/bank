
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
export const leftBarCategory = {


  "受益所有人识别": [
    "查询客户",
    "证件上传",
    "创建客户",
    "ECIF查询存在信息返回页面（境内）",
    "ECIF查询存在信息返回页面（境外）",
    "步骤五页面",
    "批量操作影像图",
    "完整识别录入页面1-1章程照片录入",
    "填写受益所有人",
    "完整识别录入页面1-2受益所有人录入",
    "后补识别录入",
    "审核中提示",
    "核实表盖章确认",
    "受益所有人识别完成",
    "命中灰名单",
    "审核失败",
    "核实表盖章机构设置",
  ],

  "受益所有人任务": [
    "受益所有人任务页面", 
    "受益所有人新增（待发起）", 
    "受益所有人审核（我发起）", 
    "受益所有人审核（待办）", 
    "受益所有人审核（待办）改", 
    "受益所有人审核（已办）",
  ],

}




const breakpoints = createBreakpoints({})

export function breakpointsAttribute(...args) {

  let xs = {}
  let sm = {}
  let md = {}
  let lg = {}
  let xl = {}

  args.forEach(item => {
    xs = { ...xs, [item[0]]: item[1] }
    sm = { ...sm, [item[0]]: item[2] || item[1] }
    md = { ...md, [item[0]]: item[3] || item[2] || item[1] }
    lg = { ...lg, [item[0]]: item[4] || item[3] || item[2] || item[1] }
    xl = { ...xl, [item[0]]: item[5] || item[4] || item[3] || item[2] || item[1] }
  })


  return {
    [breakpoints.only('xs')]: { ...xs },
    [breakpoints.only('sm')]: { ...sm },
    [breakpoints.only('md')]: { ...md },
    [breakpoints.only('lg')]: { ...lg },
    [breakpoints.only('xl')]: { ...xl },
  }
}

export function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}





export const ConditionalWrapper = ({ condition, wrapper, children }) => 
  condition ? wrapper(children) : children;