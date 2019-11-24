import React, { Component } from 'react';
// import ReactEcharts from 'echarts-for-react'
import { Card, 
  Steps,
  Button,
  message} from 'antd';
import './introduction.less'

// 从后台获取
// todo
const labelData = [
  { value: 335, name: '正常患者' },
  { value: 310, name: '多动症患者' },
  { value: 234, name: '未标注数据' },
]

const { Step } = Steps;

const steps = [
  {
    title: '第一步',
    content: '操作的患者不在库中，在患者管理页面新建患者，若已经在库中，跳过该步骤'
  },
  {
    title: '第二步',
    content: '对患者进行新建任务，选择任务类型并填写干预条件',
  },
  {
    title: '第三步',
    content: '若为WCST任务，实验结束后更新测试值',
  },
  {
    title: '第四步',
    content: '点击数据存储关联，进行数据关联，匹配对应的红外图像',
  },
];


class Introduction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      labelData: [],
      current: 0,
    }
  }

// 控制当前所处状态
  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }

  componentDidMount() {
    this.setState({
      labelData: labelData
    })
  }

  

  render() {
    const { current } = this.state;
    return (


      <div className="main-content">
        <div className="text">
          <Card className="text-left">
            <h2>数据采集系统介绍</h2>
            <p>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
          </Card>
          <Card className="text-right">
            <h2>标注步骤介绍</h2>
            <p>标注步骤介绍</p>
            <Steps current={current}>
              {steps.map(item => (
                <Step key={item.title} title={item.title} />
                )
                )
              }
            </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => this.next()}>
              下一步
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              完成
            </Button>
          )}
          {current > 0 && (
            <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
              上一步
            </Button>
          )}
        </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default Introduction;