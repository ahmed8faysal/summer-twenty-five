const categories = [
    { id: '1', name: 'All Courses', icon: 'layout-grid' },
    { id: '2', name: 'Design', icon: 'palette' },
    { id: '3', name: 'Development', icon: 'code' },
    { id: '4', name: 'Marketing', icon: 'megaphone' },
    { id: '5', name: 'Business', icon: 'briefcase' },
    { id: '6', name: 'Personal', icon: 'user' },
  ];
  
  const courses = [
    {
      id: '1',
      title: 'Career Accelerator 1.0',
      description: 'Learn the principles of creating intuitive user interfaces and engaging user experiences.',
      category: 'Design',
      level: 'Beginner',
      duration: '2 weeks',
      instructor: {
        name: 'Pritthy Alam',
        avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=1',
        title: 'Senior UX Designer'
      },
      enrolled: 2543,
      rating: 4.8,
      image: 'https://i.postimg.cc/BQcxKZ3z/Career-Peer.png',
      featured: true,
      progress: 75
    },
    {
      id: '2',
      title: 'Video Editing with Premiere Pro',
      description: 'Learn professional video editing using Adobe Premiere Pro with the guidance of our expert instructor. Join the Video Editing course now to acquire this highly sought-after skill in today world due to the popularity of social media and content creation.',
      category: 'Development',
      level: 'Intermediate',
      duration: '12 weeks',
      instructor: {
        name: 'James Prince Barai',
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=1',
        title: 'Video Editor'
      },
      enrolled: 3241,
      rating: 4.9,
      image: 'https://i.ytimg.com/vi/ESh-ZQu2jtE/maxresdefault.jpg',
      progress: 30
    },
    {
      id: '3',
      title: 'YouTube Marketing',
      description: 'YouTube is not just for watching videos it is a powerful marketing platform too. Thus, YouTube Marketing is a valuable skill in today digital marketing and freelancing world.',
      category: 'Marketing',
      level: 'Beginner',
      duration: '8 weeks',
      instructor: {
        name: 'Anisha Ahmed',
        avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=1',
        title: 'Marketing Director'
      },
      enrolled: 1897,
      rating: 4.7,
      image: 'https://cdn.10minuteschool.com/images/thumbnails/skills/youtube-marketing-course-thumbnail.jpg',
      featured: true
    }/*,
    {
      id: '4',
      title: 'Business Analytics',
      description: 'Learn to analyze data and make informed business decisions based on metrics.',
      category: 'Business',
      level: 'Intermediate',
      duration: '10 weeks',
      instructor: {
        name: 'David Wilson',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=1',
        title: 'Data Analyst'
      },
      enrolled: 1456,
      rating: 4.6,
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '5',
      title: 'Mobile App Development',
      description: 'Build native applications for iOS and Android using React Native.',
      category: 'Development',
      level: 'Advanced',
      duration: '9 weeks',
      instructor: {
        name: 'Alexandra Kim',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=1',
        title: 'Mobile Developer'
      },
      enrolled: 1235,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '6',
      title: 'Personal Finance',
      description: 'Take control of your finances with practical strategies for budgeting and investing.',
      category: 'Personal',
      level: 'Beginner',
      duration: '4 weeks',
      instructor: {
        name: 'Robert Taylor',
        avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=1',
        title: 'Financial Advisor'
      },
      enrolled: 2789,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/4386158/pexels-photo-4386158.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '7',
      title: 'Advanced Graphic Design',
      description: 'Take your design skills to the next level with advanced techniques and tools.',
      category: 'Design',
      level: 'Advanced',
      duration: '8 weeks',
      instructor: {
        name: 'Olivia Park',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=1',
        title: 'Creative Director'
      },
      enrolled: 1562,
      rating: 4.7,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: '8',
      title: 'SEO & Content Marketing',
      description: 'Learn to optimize your content for search engines and drive organic traffic.',
      category: 'Marketing',
      level: 'Intermediate',
      duration: '6 weeks',
      instructor: {
        name: 'James Murphy',
        avatar: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&dpr=1',
        title: 'SEO Specialist'
      },
      enrolled: 1876,
      rating: 4.6,
      image: 'https://images.pexels.com/photos/6177645/pexels-photo-6177645.jpeg?auto=compress&cs=tinysrgb&w=600'
    } */
  ];