
USE [master]
GO
/****** Object:  Database [BDVentas]    Script Date: 3/30/2019 10:41:15 AM ******/
CREATE DATABASE [BDVentas]
GO
USE [BDVentas]
GO
/****** Object:  Table [dbo].[Articulo]    Script Date: 3/30/2019 10:41:15 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Articulo](
	[codigo] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [nvarchar](150) NOT NULL,
	[precio] [decimal](12, 2) NOT NULL,
 CONSTRAINT [PK_Articulo] PRIMARY KEY CLUSTERED 
(
	[codigo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TipoUsuario]    Script Date: 3/30/2019 10:41:15 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TipoUsuario](
	[idtipousuario] [int] NOT NULL,
	[nombre] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_tipousuario] PRIMARY KEY CLUSTERED 
(
	[idtipousuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 3/30/2019 10:41:15 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuario](
	[idusuario] [int] IDENTITY(1,1) NOT NULL,
	[login] [nvarchar](50) NOT NULL,
	[clave] [varbinary](256) NULL,
	[nombrecompleto] [nvarchar](150) NOT NULL,
	[rutaimagen] [nvarchar](256) NOT NULL,
	[idtipousuario] [int] NOT NULL,
 CONSTRAINT [PK_Usuario] PRIMARY KEY CLUSTERED 
(
	[idusuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Articulo] ON 
GO
INSERT [dbo].[Articulo] ([codigo], [nombre], [precio]) VALUES (1, N'MESA DE VIDRIO', CAST(1200.00 AS Decimal(12, 2)))
GO
INSERT [dbo].[Articulo] ([codigo], [nombre], [precio]) VALUES (2, N'MICROONDAS', CAST(350.00 AS Decimal(12, 2)))
GO
SET IDENTITY_INSERT [dbo].[Articulo] OFF
GO
INSERT [dbo].[TipoUsuario] ([idtipousuario], [nombre]) VALUES (1, N'Administrador')
GO
INSERT [dbo].[TipoUsuario] ([idtipousuario], [nombre]) VALUES (2, N'Operador')
GO
INSERT [dbo].[TipoUsuario] ([idtipousuario], [nombre]) VALUES (3, N'Invitado')
GO
USE [master]
 

