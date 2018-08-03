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
	(N'775054',N'Integer sapien felis, faucibus nec nulla quis, pretium efficitur massa. Integer mollis dolor vitae velit auctor malesuada. In aliquam eleifend urna, sed malesuada nisi luctus nec. Aliquam vitae dignissim mi. Aliquam sit amet nunc nec lorem faucibus lacinia. Etiam consectetur id urna id pulvinar.', 
		   N'Location 456', GetDate())

INSERT INTO [dbo].[Incidents]
	([ProfileCode],[Description],[Location],[Created])
VALUES
	(N'8001533064536',N'Medical doctors examine, diagnose and treat patients. They can specialize in a number of medical areas, such as pediatrics, anesthesiology or cardiology, or they can work as general practice physicians. Becoming a medical doctor requires earning a doctoral degree in medicine and participating in clinical rotations.', 
		   N'Location 8989', GetDate())


