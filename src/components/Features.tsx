import React from 'react';
import { 
  Monitor, 
  Shield, 
  Search, 
  Zap, 
  Mail,
  Eye,
  Activity,
  AlertTriangle,
  Wrench
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Monitor,
      title: "Real-time Endpoint & Log Monitoring",
      description: "Continuous monitoring of all endpoints and system logs with advanced analytics and machine learning detection.",
      color: "blue"
    },
    {
      icon: Shield,
      title: "Network-based Threat Detection",
      description: "Advanced network traffic analysis and behavioral monitoring to identify suspicious activities and potential breaches.",
      color: "orange"
    },
    {
      icon: Search,
      title: "Threat Validation & Intelligence Enrichment",
      description: "Comprehensive IOC analysis with threat intelligence feeds to validate and enrich security events.",
      color: "blue"
    },
    {
      icon: Zap,
      title: "Entire Workflow Automation",
      description: "Streamlined security operations with automated response workflows and intelligent incident management.",
      color: "orange"
    },
    {
      icon: Mail,
      title: "Email Alerts Delivered Directly",
      description: "Real-time email notifications and detailed reports delivered straight to your security team's inbox.",
      color: "blue"
    },
    {
      icon: Wrench,
      title: "Patch Management",
      description: "Analyzes logs and notifies users via email when a service has an update, ensuring timely patching and security.",
      color: "orange"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Complete Security Operations
            <span className="text-orange-600"> Suite</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive SOC service covers every aspect of your security operations, 
            from detection to response, ensuring complete protection for your organization.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-blue-600 mx-auto mt-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-gray-200"
            >
              <div className={`${
                feature.color === 'blue' ? 'bg-blue-100 text-blue-600' : 'bg-orange-100 text-orange-600'
              } w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              <div className={`mt-6 w-full h-1 bg-gradient-to-r ${
                feature.color === 'blue' 
                  ? 'from-blue-600 to-blue-400' 
                  : 'from-orange-600 to-orange-400'
              } rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Additional Security Metrics */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">Million+</div>
              <div className="text-gray-600">Events Processed Daily</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-orange-100 p-4 rounded-full mb-4">
                <Activity className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-600">Threat Indicators</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <AlertTriangle className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99.97%</div>
              <div className="text-gray-600">Threat Detection Rate</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-orange-100 p-4 rounded-full mb-4">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-2">Seconds</div>
              <div className="text-gray-600">Average Response Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;