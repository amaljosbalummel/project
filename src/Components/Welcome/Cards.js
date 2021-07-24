import React from'react'
import {Col,Row} from'antd';
import { Card } from 'antd';
import './Cards.module.css';


const CardComponent = () => {

  //rendering the card components
    return(
        <div className="block featureBlock bgGray">
            <div className="container-fluid">
            <Row gutter={16}>
            <Col span={8}>
        <Card className="Card" title="CREATE" hoverable="true" bordered={false}>
        Without black, no color has any depth. But if you mix black with everything, suddenly there's shadow - no, not just shadow, but fullness. You've got to be willing to mix black into your palette if you want to create something that's real.
        </Card>
      </Col>
      <Col span={8}>
        <Card title="POST"  hoverable="true" bordered={false}>
        Social media is changing the way we communicate and the way we are perceived, both positively and negatively. Every time you post a photo, or update your status, you are contributing to your own digital footprint and personal brand.
        </Card>
      </Col>
      <Col span={8}>
        <Card title="SHARE"  hoverable="true" bordered={false}>
        Our uniqueness makes us special, makes perception valuable - but it can also make us lonely. This loneliness is different from being 'alone': You can be lonely even surrounded by people. The feeling I'm talking about stems from the sense that we can never fully share the truth of who we are. I experienced this acutely at an early age.

        </Card>
      </Col>

</Row>
            </div>
        </div>
    )

}
export default CardComponent;