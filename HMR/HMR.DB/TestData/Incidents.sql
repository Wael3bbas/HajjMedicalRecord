USE [HMRDB]
GO
Delete From [dbo].[Incidents]
Go


INSERT INTO [dbo].[Incidents]
	([ProfileCode],[Description],[Location],[Created])
VALUES
	(N'12345',N'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque libero et tristique rhoncus. Proin eget pulvinar arcu. Phasellus congue eget lacus ac aliquam. Integer eleifend sem ut fermentum imperdiet. Fusce nibh nunc, maximus non est quis, pulvinar faucibus velit. Etiam commodo auctor finibus. Curabitur tristique eleifend est, in euismod diam vehicula a.', 
		   N'Location 009', GetDate())

INSERT INTO [dbo].[Incidents]
	([ProfileCode],[Description],[Location],[Created])
VALUES
	(N'67890',N'Integer sapien felis, faucibus nec nulla quis, pretium efficitur massa. Integer mollis dolor vitae velit auctor malesuada. In aliquam eleifend urna, sed malesuada nisi luctus nec. Aliquam vitae dignissim mi. Aliquam sit amet nunc nec lorem faucibus lacinia. Etiam consectetur id urna id pulvinar.', 
		   N'Location 456', GetDate())

INSERT INTO [dbo].[Incidents]
	([ProfileCode],[Description],[Location],[Created])
VALUES
	(N'54321',N'Nam sit amet tempor velit. Praesent varius et leo nec rhoncus. Suspendisse nunc diam, volutpat eu enim facilisis, pellentesque dignissim orci. Curabitur ultricies vestibulum nulla, sit amet sagittis elit bibendum ac. Quisque sit amet elit in metus porttitor mattis. Cras in porta mauris, non varius dolor. Duis luctus eu sem non placerat. Duis id euismod turpis. Donec ac nisl eget ante vehicula luctus sed at lorem. Integer pulvinar lobortis metus sit amet interdum. Quisque lobortis turpis non dui lobortis, vitae commodo tellus suscipit. Suspendisse vitae porttitor nunc. Proin ultrices placerat arcu sit amet vulputate.', 
		   N'Location 8989', GetDate())


